
export default {
    namespace:'uploadModel',
    state:{
        visible:false,
        buyVisible:false
    },
    reducers:{
        changeVisible(state,payLoad){
            let _state = JSON.parse(JSON.stringify(state))
            _state.visible = payLoad.visible
            _state.buyVisible = payLoad.buyVisible
            return _state
        }
    }
}