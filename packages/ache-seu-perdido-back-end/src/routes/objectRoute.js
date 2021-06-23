import express from 'express'
import asyncHandler from 'express-async-handler'
import validate from 'express-validation'

import ObjectValidator from '../app/validators/Object.js'
import ObjectController from '../app/controllers/ObjectController.js'

const routes = express.Router()

routes.post(
  '/objects',
  validate(ObjectValidator),
  asyncHandler(ObjectController.store)
)

routes.get('/objects', asyncHandler(ObjectController.index))

export default routes
