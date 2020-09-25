import { getLogin } from '../../services/example'
import { routerRedux } from 'dva/router'

export default {
    namespace: 'login',
    state: {
        name: 'login',
        token: '',
        isRember: true
    },
    reducers: {
        setToken(state, payLoad) {
            console.log(payLoad)
            let _state = JSON.parse(JSON.stringify(state))
            _state.token = payLoad.token
            console.log(state)
            return _state
        },
        setIsRember(state, payLoad) {
            return {
                ...state,
                isRember: payLoad.isRember
            }
        }
    },
    effects: {
        *loginAsync({ payload }, { put, call }) {
            let rel = yield call(getLogin, payload)
            return rel
        }
    }
}









