import React, { Component, Fragment } from 'react';

const headerList = [
    { name: '首页', path: '', index: 0 },
    { name: '分托管理', path: '', index: 1 },
    { name: '企业签名', path: '', index: 2 },
    { name: '超级签名', path: '', index: 3 },
    { name: '网页封装', path: '', index: 4 }
]

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