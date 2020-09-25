import { getDownloadList } from '../../services/example'
import { createSingleStateModel } from '../createSingleModal'

export const downloadRecordModal = createSingleStateModel('downData','getDownloadList',getDownloadList,{})