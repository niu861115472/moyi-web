import { getInstallList } from '../../services/example'
import { createSingleStateModel } from '../createSingleModal'

export const installRecordModal = createSingleStateModel('installData','getInstallList',getInstallList,{})