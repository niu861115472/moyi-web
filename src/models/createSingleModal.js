export const createSingleStateModel = (name,apiName,apiFunc,initValue) => ({
    state: {
        [name]: initValue
    },
    reducers: {
        [`${name}Change`]: (state, payload) => ({
            ...state,
            [name]: payload.data
        })
    },
    effects: {
        *[`${apiName}Async`]({ payload },{ put, call }){
            let res = yield call(apiFunc, payload)
            if (res.code == 200) {
                yield put({
                    type: [`${name}Change`],
                    data: res.data
                })
            }
        }
    }
})