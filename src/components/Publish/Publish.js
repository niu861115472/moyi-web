import React, { useState } from 'react';
import { connect } from 'dva'
import UpLoad from './UpLoad'
import BuyDevice from './BuyDevice'
import './style.css'

function Publish(props) {
<<<<<<< HEAD
    const handlePublish = () => {
        props.dispatch({
            type: 'uploadModel/changeVisible',
            visible: true
        })
    }
    const handlePurchase = () => {
        props.dispatch({
=======
    const { dispatch, buyVisible } = props
    const handlePublish = () => {
        dispatch({
            type: 'uploadModel/changeVisible',
            visible: true,
            operation_type:"new",
            app_key:null,
            file_type:".ipa,.apk"
        })
    }
    const handlePurchase = () => {
        dispatch({
>>>>>>> 9-25 update
            type: 'uploadModel/changeVisible',
            buyVisible: true
        })
    }
    return (
        <div className="publish_box">
            <div className="publish same" onClick={handlePublish}>
                <img src={require('../../assets/images/apply_list/发布@2x.png')} alt="" />
                <p>发布</p>
            </div>
            <UpLoad />
            <div className="purchase same" onClick={handlePurchase}>
                <img src={require('../../assets/images/apply_list/购买@2x.png')} alt="" />
                <p>购买</p>
            </div>
<<<<<<< HEAD
            <BuyDevice />
=======
            {
                buyVisible ? <BuyDevice /> : null
            }
>>>>>>> 9-25 update
        </div>
    )
}

const mapStateToProps = (state) => {
<<<<<<< HEAD
    console.log(state)
    return {
        visible: state.uploadModel.visible
=======
    return {
        visible: state.uploadModel.visible,
        buyVisible: state.uploadModel.buyVisible
>>>>>>> 9-25 update
    }
}

export default connect(mapStateToProps)(Publish)