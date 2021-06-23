import dotenv from 'dotenv'
import express from 'express'
import Youch from 'youch'
import validate from 'express-validation'
import HttpStatus from 'http-status-codes'
import cors from 'cors'
import http from 'http'
import routes from './routes/index.js'

dotenv.config()

class App {
  constructor () {
    this.express = express()
    this.express.use(express.json({ limit: '1mb' }))
    this.express.use(cors())
    this.server = http.Server(this.express)

    this.routes()
    this.exception()
  }

  routes () {
    this.express.use(routes)
  }

  // Handler para mapear os erros que ocorrem no servidor
  exception () {
    this.express.use(async (err, req, res, next) => {
      if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err)
      }

      // Caso estiver ambiente de desenv, youch retorna um json com infos uteis
      if (['development', 'test'].includes(process.env.NODE_ENV)) {
        console.log(err)
        const youchError = new Youch(err)
        return res
          .status(err.status || HttpStatus.INTERNAL_SERVER_ERROR)
          .json(await youchError.toJSON())
      }

      return res
        .status(err.status || HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'Server error' })
    })
  }
}

export default new App().server
