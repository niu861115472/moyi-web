import React, { useState } from 'react';
<<<<<<< HEAD
import { Route, Link } from 'dva/router';
=======
import { Route, NavLink, withRouter } from 'dva/router';
import { Dropdown } from 'element-react'
import { getLogout } from '../../services/example'
>>>>>>> 9-25 update
import Product from '../../routes/Product/Product'
import ApplyList from '../../routes/ApplyList/ApplyIndex'
import Finance from '../../routes/Finance/Finance'
import UserCenter from '../../routes/UserCenter/User'
import ListDetail from '../../routes/ListDetail/ListDetail'
import Publish from '../Publish/Publish'
import './style.css'

const list = [
<<<<<<< HEAD
    { name: '产品概览', path: '/client/index/0', icon: require('../../assets/images/apply_list/主页.png') },
=======
    { name: '产品概览', path: '/client/index/0', icon: require('../../assets/images/apply_list/产品.png') },
>>>>>>> 9-25 update
    { name: '应用列表', path: '/client/apply_list/1', icon: require('../../assets/images/apply_list/gailan@2x.png') },
    { name: '财务中心', path: '/client/finance/2', icon: require('../../assets/images/apply_list/recharge@2x.png') },
    { name: '用户中心', path: '/client/user/3', icon: require('../../assets/images/apply_list/gerenzhongxinxuanzhong@2x.png') }
]

function ClientComponent(props) {
<<<<<<< HEAD
    console.log(props)
    const { id } = props.match.params
    const [currentIndex, setIndex] = useState(id)
    function handleSelectedIndex(index) {
        setIndex(index)
    }
=======
    const { id } = props.match.params
    const [currentIndex, setIndex] = useState(id)
    const handleSelectedIndex = (index) => {
        setIndex(index)
    }
    const handleCommand = (command) => {
        if (command == "个人中心") {
            props.history.push("/client/user/3")
        } else if (command == "退出") {
            getLogout().then(res =>{
                if(res.code == 200){
                    localStorage.removeItem('token')
                    props.history.push("/")
                }
            })
        }
    }
>>>>>>> 9-25 update
    return (
        <div className="client_box">
            <div className="header">
                <div className="header_logo">
                    <img src={require("../../assets/images/apply_list/logo_copy2@2x.png")} alt="" />
                </div>
                <div className="header_user">
<<<<<<< HEAD
                    <img src={require("../../assets/images/apply_list/头像@2x.png")} alt="" />
=======

                    <Dropdown onCommand={handleCommand} trigger="click" menu={(
                        <Dropdown.Menu>
                            <Dropdown.Item command="个人中心">个人中心</Dropdown.Item>
                            <Dropdown.Item command="退出" divided>退出</Dropdown.Item>
                        </Dropdown.Menu>
                    )}>
                        <img src={require("../../assets/images/apply_list/头像@2x.png")} alt="" />
                    </Dropdown>
>>>>>>> 9-25 update
                </div>
            </div>
            <div className="aside">
                <div className="aside_list">
                    <ul className="aside_ul">
                        {
                            list.map((item, index) => {
                                return (
<<<<<<< HEAD
                                    <Link key={index} to={item.path}>
=======
                                    <NavLink key={index} to={item.path}>
>>>>>>> 9-25 update
                                        <li onClick={() => handleSelectedIndex(index)} className={index == currentIndex ? 'current' : ''}>
                                            <div className="list_img">
                                                <img src={item.icon} alt="" />
                                            </div>
                                            <p>{item.name}</p>
                                        </li>
<<<<<<< HEAD
                                    </Link>
=======
                                    </NavLink>
>>>>>>> 9-25 update
                                )
                            })
                        }
                    </ul>
                    <Publish />
                </div>
                <div className="mian" key={props.location.key}>
<<<<<<< HEAD
                    <Route path="/client/index/0" exact component={Product} />
=======
                    <Route path="/client/index/0" component={Product} />
>>>>>>> 9-25 update
                    <Route path="/client/apply_list/1" component={ApplyList} />
                    <Route path="/client/finance/2" component={Finance} />
                    <Route path="/client/user/3" component={UserCenter} />
                    <Route path="/client/list_detail/1" component={ListDetail} />
                </div>
            </div>
        </div>
    )
}

<<<<<<< HEAD
export default ClientComponent
=======
export default withRouter(ClientComponent)
>>>>>>> 9-25 update
