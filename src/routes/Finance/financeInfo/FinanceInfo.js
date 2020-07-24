import React, { Component } from 'react';
import ListComponent from './ListComponent'
import Img from '../../../assets/images/finance_center/bg.png'
import IconOne from '../../../assets/images/finance_center/设备管理备份.png'
import IconTwo from '../../../assets/images/finance_center/点数据备份.png'

function FinanceInfo(){

    return (
        <div className="finance_info account_data">
            <p className="account_title">财务信息</p>
            <ListComponent
                img={Img}
                icon={IconOne}
                text="剩余设备数"
                num="1800"
            />
            <ListComponent
                img={Img}
                icon={IconTwo}
                text="点数"
                num="2000"
            />
        </div>
    )
}

export default FinanceInfo