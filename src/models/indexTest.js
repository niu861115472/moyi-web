// import * as apis from '../services/example'

export default {
    namespace:'indexTest',
    state:{
        name:'miss',
        cnodeData:[]
    },
    reducers:{
        setName(state,payLoad){
            console.log(payLoad)
            let _state = JSON.parse(JSON.stringify(state))
            _state.name = payLoad.data.name
            console.log(state)
            return _state
        },
        setCnodeDataList(state,payLoad){
            let _state = JSON.parse(JSON.stringify(state))
            console.log(payLoad)
            _state.cnodeData = payLoad.data
            return _state
        },
        testPath(state,payLoad){
            console.log('用户页')
            return state
        }
    },
    effects:{
        *setNameAsync({payLoad},{put,call}){
            yield put({
                type:'setName',
                data:{
                    name:"超人强"
                }
            })
        },
        // *testCode({payLoad},{put,call}){
        //    let rel = yield call(apis.testCnode)
        //    if(rel.data){
        //        console.log(rel.data.data)
        //        yield put({
        //            type:'setCnodeDataList',
        //            data:rel.data.data
        //        })
        //    }
        // }
    },
    subscriptions:{
        haha({dispatch,history}){
            console.log('run')
            history.listen(({pathname})=>{
                if(pathname == '/user'){
                    dispatch({
                        type:'testPath'
                    })
                }
            })
        }
    }
}