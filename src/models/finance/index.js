import { combineModels } from '../combineModels'
import { financeInfoModal } from './financeInfo'
import { costListModal, orderListModal } from './customer'

export default combineModels(
    financeInfoModal,
    costListModal,
    orderListModal,
    { namespace: "finance" } // 指定一下namespace
);