<<<<<<< HEAD
import React, { Component, Fragment } from 'react';
=======
import React, { useState } from 'react';
import { withRouter } from 'dva/router'
>>>>>>> 9-25 update

const headerList = [
    { name: '首页', path: '', index: 0 },
    { name: '分托管理', path: '', index: 1 },
    { name: '企业签名', path: '', index: 2 },
    { name: '超级签名', path: '', index: 3 },
    { name: '网页封装', path: '', index: 4 }
]

<<<<<<< HEAD
function Header(props) {

    return (
        <Fragment>
            <el-header>
                <div className="header">
                    <div className="header_left">
                        <div className="header_logo">
                            <img src="../../assets/images/home/" alt=""/>
                        </div>
                        <ul>
                            {
                                headerList.map((item, index) => {
                                    return (
                                        <li key={item + index}>{item.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="header_right"></div>
                </div>
            </el-header>
        </Fragment>
    )
}

export default Header
=======
function HeaderIndex(props) {
    const [currentIndex, setIndex] = useState(0)
    const handleSelect = (index) => {
        setIndex(index)
    }
    const handleToPath = (key) => {
        if (key == "register") {
            props.history.push("/register")
            return
        }
        if (key == "login") {
            props.history.push("/login")
            return
        }
    }
    return (
        <div className="header">
            <div className="header_left">
                <div className="header_logo">
                    <img src={require("../../assets/images/home/logo.png")} alt="" />
                </div>
                <ul>
                    {
                        headerList.map((item, index) => {
                            return (
                                <li
                                    className={currentIndex == index ? 'current_li' : ''}
                                    key={item + index}
                                    onClick={() => handleSelect(index)}
                                >{item.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="header_right">
                <div className="to_register" onClick={() => handleToPath('register')}>注册</div>
                <div className="to_login" onClick={() => handleToPath('login')}>登录</div>
            </div>
        </div>
    )
}

export default withRouter(HeaderIndex)
>>>>>>> 9-25 update
