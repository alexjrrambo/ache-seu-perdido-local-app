import express from 'express'
import objectRoute from './objectRoute.js'

const routes = express.Router()
routes.use(objectRoute)

export default routes
