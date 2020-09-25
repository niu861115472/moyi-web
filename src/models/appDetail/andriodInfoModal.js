import { getAndroidInfo, editAndroidInfo } from '../../services/example'
import { combineModels } from '../combineModels'
import { createSingleStateModel } from '../createSingleModal'

export const andriodInfoModal = combineModels(
    createSingleStateModel('andriodData', 'getAndroidInfo', getAndroidInfo, {}),
    {
        effects: {
            *changeandroidInfoAsync({ payload }, { put, call }) {
                yield call(editAndroidInfo, payload)
            }
        }
    }
)