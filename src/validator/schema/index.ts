export * from './notify'
export * from './trade_close'
export * from './trade_settle'
export * from './trade_refund'
export * from './query_order'
export * from './create_app_order'
export * from './create_web_order'
export * from './create_page_order'
export * from './cancel_order'
export * from './verify_payment'
export * from './trade_precreate'
export * from './trade_refund_query'
export * from './bill_download_query'
export * from './toaccount_transfer'

import * as Joi from 'joi'
import * as moment from 'moment'
import { AlipaySignType } from 'config'

export const basicSchema: Joi.ObjectSchema = Joi.object({
  app_id: Joi.string().max(32).required(),
  method: Joi.string().max(128).required(),
  format: Joi.string().max(40),
  return_url: Joi.string().max(256),
  charset: Joi.string().max(10).required(),
  sign_type: Joi.string().allow(Object.keys(AlipaySignType)),
  timestamp: Joi.string().max(19).default(() => moment().format('YYYY-MM-DD HH:mm:ss')),
  version: Joi.string().max(3).required(),
  notify_url: Joi.string().max(256)
})