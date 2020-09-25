import { getCostInfo,getOrderInfo } from '../../services/example'
import { createSingleStateModel } from '../createSingleModal'

export const costListModal = createSingleStateModel('costData','getCostInfo',getCostInfo,{})
export const orderListModal = createSingleStateModel('orderData','getOrderInfo',getOrderInfo,{})