import React from 'react';
import AccountData from './AccountData'
import RealDownLoad from './RealDownLoad'
import TodayData from './TodayData'
import './style.css'

function Product(){

    return (
        <div className="product">
            <AccountData />
            <RealDownLoad />
            <TodayData />
        </div>
    )
}

export default Product