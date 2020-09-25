<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> 9-25 update
import ListComponent from './ListComponent'
import Img from '../../../assets/images/finance_center/bg.png'
import IconOne from '../../../assets/images/finance_center/设备管理备份.png'
import IconTwo from '../../../assets/images/finance_center/点数据备份.png'
<<<<<<< HEAD

function FinanceInfo(){
=======
import { connect } from 'dva'

function FinanceInfo(props) {
    const { dispatch, public_coin, download_point } = props
    useEffect(() => {
        dispatch({
            type: "finance/getFinanceInfoAsync"
        })
    }, [])
>>>>>>> 9-25 update

    return (
        <div className="finance_info account_data">
            <p className="account_title">财务信息</p>
<<<<<<< HEAD
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
=======
            {
                public_coin &&
                <ListComponent
                    img={Img}
                    icon={IconOne}
                    text="剩余设备数"
                    num="1800"
                    list={public_coin}
                />
            }
            {
                download_point &&
                <ListComponent
                    img={Img}
                    icon={IconTwo}
                    text="点数"
                    num="2000"
                    list={download_point}
                />
            }
>>>>>>> 9-25 update
        </div>
    )
}

<<<<<<< HEAD
export default FinanceInfo
=======
const mapStateToProps = (state) => {
    return {
        public_coin: state.finance.infoData.public_coin,
        download_point: state.finance.infoData.download_point
    }
}

export default connect(mapStateToProps)(FinanceInfo)
>>>>>>> 9-25 update
