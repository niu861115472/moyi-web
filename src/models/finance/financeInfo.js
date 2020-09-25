import { getFinanceInfo } from '../../services/example'
import { createSingleStateModel } from '../createSingleModal'

export const financeInfoModal = createSingleStateModel('infoData','getFinanceInfo',getFinanceInfo,{})