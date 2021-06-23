import Joi from 'joi'
import ErrorUtil from '../modules/utils/ErrorUtil.js'

export default {
  body: {
    objectName: Joi.string()
      .required()
      .label('Nome do objeto')
      .error(ErrorUtil.joiErrorHandler),
    state: Joi.string()
      .required()
      .label('Estado')
      .error(ErrorUtil.joiErrorHandler),
    city: Joi.string()
      .required()
      .label('Cidade')
      .error(ErrorUtil.joiErrorHandler),
    phone: Joi.string()
      .required()
      .label('Contato')
      .error(ErrorUtil.joiErrorHandler),
    objectLocation: Joi.string()
      .required()
      .label('Local')
      .error(ErrorUtil.joiErrorHandler)
  }
}
