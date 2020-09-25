import { getHeadInfo } from '../../services/example'

export const headInfoModal =
{
    state: {
        data: {},
        has_ios: null,
        has_android: null,
        isShow:false
    },
    reducers: {
        dataChange(state, payload) {
            return {
                ...state,
                data: payload.data
            }
        },
        androidChange(state, payload) {
            return {
                ...state,
                has_android: payload.has_android
            }
        },
        iosChange(state, payload) {
            return {
                ...state,
                has_ios: payload.has_ios
            }
        }
    },
    effects: {
        *getHeadInfoAsync({ payload }, { put, call }) {
            let res = yield call(getHeadInfo, payload)
            if (res.code == 200) {
                yield put({
                    type: "dataChange",
                    data: res.data
                })
                yield put({
                    type: "iosChange",
                    has_ios: res.data.has_ios
                })
                yield put({
                    type: "androidChange",
                    has_android: res.data.has_android
                })
            }
        }
    }
}