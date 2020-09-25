import { combineModels } from '../combineModels'
import { headInfoModal } from './headInfoModal'
import { baseInfoModal } from './baseInfoModal'
import { installRecordModal } from './installRecord'
import { downloadRecordModal } from './downloadModal'
import { iosInfoModal } from './iosInfoModal'
import { andriodInfoModal } from './andriodInfoModal'

export default combineModels(
    headInfoModal,
    baseInfoModal,
    installRecordModal,
    downloadRecordModal,
    iosInfoModal,
    andriodInfoModal,
    { namespace: "appDetail" } // 指定一下namespace
);