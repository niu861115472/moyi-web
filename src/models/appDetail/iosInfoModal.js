import { getIosInfo, editIosInfo } from '../../services/example'
import { combineModels } from '../combineModels'
import { createSingleStateModel } from '../createSingleModal'

export const iosInfoModal = combineModels(
    createSingleStateModel('iosData', 'getIosInfo', getIosInfo, {}),
    {
        effects: {
            *changeiosInfoAsync({ payload }, { put, call }) {
                yield call(editIosInfo, payload)
            }
        }
    }
)