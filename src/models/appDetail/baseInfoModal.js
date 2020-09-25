import { createSingleStateModel } from '../createSingleModal'
import { combineModels } from '../combineModels'
import { getBaseInfo, saveBaseInfo } from '../../services/example'

export const baseInfoModal = combineModels(
    createSingleStateModel('baseData', 'getBaseInfo', getBaseInfo, {}),
    {
        effects: {
            *saveBaseInfoAsync({ payload }, { put, call }) {
                yield call(saveBaseInfo, payload)
            }
        }
    }
)