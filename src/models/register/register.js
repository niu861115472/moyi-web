import { getRegister } from '../../services/example'
import { routerRedux } from 'dva/router'

export default {
    namespace: "register",
    state: {
        code: ""
    },
    reducers: {

    },
    effects: {
        *registerAsync({ payload }, { put, call }) {
            let rel = yield call(getRegister, payload)
            return rel
        }
    }
}