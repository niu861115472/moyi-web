import React, { useState } from 'react';
import { connect } from 'dva'
import UpLoad from './UpLoad'
import BuyDevice from './BuyDevice'
import './style.css'

function Publish(props) {
    const handlePublish = () => {
        props.dispatch({
            type: 'uploadModel/changeVisible',
            visible: true
        })
    }
    const handlePurchase = () => {
        props.dispatch({
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
            <BuyDevice />
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        visible: state.uploadModel.visible
    }
}

export default connect(mapStateToProps)(Publish)