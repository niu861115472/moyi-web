import React from 'react';
import FinanceInfo from './financeInfo/FinanceInfo'
import Customer from './customer/Customer'
import './style.css'

function Finance(){

    return (
        <div className="finance">
            <FinanceInfo />
            <Customer />
        </div>
    )
}

export default Finance