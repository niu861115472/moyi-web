<<<<<<< HEAD
import React, { Component } from 'react';
import { Progress } from 'element-react'

function AccountData() {
=======
import React, { useEffect, useState } from 'react';
import { Progress } from 'element-react'
import { connect } from 'dva'

function AccountData(props) {
    const [userData, setData] = useState({})
    const [userLevel,setLevel] = useState({})

    useEffect(() => {
        props.dispatch({
            type: 'product/getUserInfoAsync'
        }).then(res =>{
            setData(res.user_info)
            setLevel(res.user_level)
        })
    }, [])
>>>>>>> 9-25 update

    return (
        <div className="account_data">
            <p className="account_title">账户资料</p>
            <div className="account_content">
                <div className="content_left">
                    <div>
                        <img src={require('../../assets/images/apply_list/头像@2x.png')} alt="" />
                    </div>
                    <div>
                        <img src={require('../../assets/images/apply_list/认证备份@2x.png')} alt="" />
<<<<<<< HEAD
                        <span>已认证</span>
                    </div>
                    <div>
                        手机号
                        <span>12354687951</span>
                    </div>
                    <div>
                        用户名
                        <span>niu85462133</span>
=======
                        <span>{userData.is_auth == 1 ? '已认证' : '未认证'}</span>
                    </div>
                    <div>
                        手机号
                        <span>{userData.mobile}</span>
                    </div>
                    <div>
                        用户名
                        <span>{userData.username}</span>
>>>>>>> 9-25 update
                    </div>
                </div>
                <div className="content_right">
                    <div>
                        当前等级：
<<<<<<< HEAD
                        <span>V0</span>
                    </div>
                    <div>
                        距离下级还需：
                        <span>3000</span>
                    </div>
                    <Progress className="progress" strokeWidth={18} percentage={50} showText={false} />
                    <div className="progress_icon_box">
                        <div className="progress_icon">V0</div>
                        <div className="progress_icon progress_icon_none">V0</div>
=======
                        <span>{userLevel.now_level}</span>
                    </div>
                    <div>
                        距离下级还需：
                        <span>{userLevel.next_level}</span>
                    </div>
                    <Progress className="progress" strokeWidth={18} percentage={
                        Math.round(userLevel.now_cost/(userLevel.level_end - userLevel.level_start)* 100)
                    } showText={false} />
                    <div className="progress_icon_box">
                        <div className="progress_icon">{userLevel.now_level}</div>
                        <div className="progress_icon progress_icon_none">V{parseInt(userLevel.level_start)+1}</div>
>>>>>>> 9-25 update
                    </div>
                </div>
            </div>
        </div>
    )
}

<<<<<<< HEAD
export default AccountData
=======
const mapStateToProps = (state) => {
    return {
        data: state.product.data
    }
}


export default connect(mapStateToProps)(AccountData)
>>>>>>> 9-25 update
