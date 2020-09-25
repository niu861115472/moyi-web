import { getAppList,getDelApp,editAppStatus } from '../../services/example'

export default {
    namespace: 'appList',
    state: {
        list: [],
        pageSize:1,
        key:""
    },
    reducers: {
        setList(state,payload){
            return {
                ...state,
                list:payload.list
            }
        },
        setPageSize(state,payload){
            return {
                ...state,
                pageSize:payload.page
            }
        }
    },
    effects: {
        *getAppListAsync({ payload }, { put, call }){
            let res = yield call(getAppList,payload)
            if(res.code == 200){
                yield put({
                    type:"setList",
                    list:res.data
                })
            }
        },
        *deleteAppAsync({ payload }, { put, call }){
            let res = yield call(getDelApp,payload)
        },
        *editStatusAsync({ payload }, { put, call }){
            let res = yield call(editAppStatus,payload)
        }
    }
}