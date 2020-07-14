import React, { useState } from 'react';
import { Route, Link } from 'dva/router';
import Product from '../../routes/Product/Product'
import ApplyList from '../../routes/ApplyList/ApplyIndex'
import Finance from '../../routes/Finance/Finance'
import UserCenter from '../../routes/UserCenter/User'
import ListDetail from '../../routes/ListDetail/ListDetail'
import Publish from '../Publish/Publish'
import './style.css'

const list = [
    { name: '产品概览', path: '/client/index/0', icon: require('../../assets/images/apply_list/主页.png') },
    { name: '应用列表', path: '/client/apply_list/1', icon: require('../../assets/images/apply_list/gailan@2x.png') },
    { name: '财务中心', path: '/client/finance/2', icon: require('../../assets/images/apply_list/recharge@2x.png') },
    { name: '用户中心', path: '/client/user/3', icon: require('../../assets/images/apply_list/gerenzhongxinxuanzhong@2x.png') }
]

function ClientComponent(props) {
    console.log(props)
    const { id } = props.match.params
    const [currentIndex, setIndex] = useState(id)
    function handleSelectedIndex(index) {
        setIndex(index)
    }
    return (
        <div className="client_box">
            <div className="header">
                <div className="header_logo">
                    <img src={require("../../assets/images/apply_list/logo_copy2@2x.png")} alt="" />
                </div>
                <div className="header_user">
                    <img src={require("../../assets/images/apply_list/头像@2x.png")} alt="" />
                </div>
            </div>
            <div className="aside">
                <div className="aside_list">
                    <ul>
                        {
                            list.map((item, index) => {
                                return (
                                    <Link key={index} to={item.path}>
                                        <li onClick={() => handleSelectedIndex(index)} className={index == currentIndex ? 'current' : ''}>
                                            <div className="list_img">
                                                <img src={item.icon} alt="" />
                                            </div>
                                            <p>{item.name}</p>
                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                    <Publish />
                </div>
                <div className="mian" key={props.location.key}>
                    <Route path="/client/index/0" exact component={Product} />
                    <Route path="/client/apply_list/1" component={ApplyList} />
                    <Route path="/client/finance/2" component={Finance} />
                    <Route path="/client/user/3" component={UserCenter} />
                    <Route path="/client/list_detail/1" component={ListDetail} />
                </div>
            </div>
        </div>
    )
}

export default ClientComponent