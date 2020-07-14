import React, { useState, Fragment } from 'react';
import './style.css'

function Publish() {
    function handlePublish() {

    }
    function handlePurchase() {

    }
    return (
        <div className="publish_box">
            <div className="publish same" onClick={handlePublish}>
                <img src={require('../../assets/images/apply_list/发布@2x.png')} alt="" />
                <p>发布</p>
            </div>
            <div className="purchase same" onClick={handlePurchase}>
                <img src={require('../../assets/images/apply_list/购买@2x.png')} alt="" />
                <p>购买</p>
            </div>
        </div>
    )
}

export default Publish