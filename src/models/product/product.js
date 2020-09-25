import { getUserInfo, getTodayData } from '../../services/example'

export default {
    namespace: "product",
    state: {
        data: {},
        todayData: {}
    },
    reducers: {
        setUserInfo(state, payload) {
            let _state = JSON.parse(JSON.stringify(state))
            _state.data = payload.data
            return _state
        },
        setTodayData(state, payload) {
            let _state = JSON.parse(JSON.stringify(state))
            _state.todayData = payload.data
            return _state
        },
    },
    effects: {
        *getUserInfoAsync({ payload }, { put, call }) {
            let rel = yield call(getUserInfo, payload)
            if (rel.code == 200) {
                yield put({
                    type:"setUserInfo",
                    data:rel.data
                })
                return rel.data
            }
        },
        *getTodayDataAsync({ payload }, { put, call }) {
            let rel = yield call(getTodayData, payload)
            if (rel.code == 200) {
                yield put({
                    type: "setTodayData",
                    data: rel.data
                })
            }
        },
    }
}