<<<<<<< HEAD
import React from 'react';
import { withRouter } from 'dva/router'
import { Switch, Button, Tooltip } from 'element-react'

function ListItem(props) {
    const { history } = props
    function toDetail() {
        history.push('/client/list_detail/1')
=======
import React, { useState } from 'react';
import { withRouter } from 'dva/router'
import { Switch, Button, Tooltip, MessageBox } from 'element-react'
import { connect } from 'dva'
import Qrcode from '../../components/qrcode/Qrcode'

function ListItem(props) {
    const { history, item, dispatch } = props
    const [androidShow, setAndroid] = useState(false)
    const [iosShow, setIos] = useState(false)
    const toDetail = () => {
        history.push({
            pathname: '/client/list_detail/1/',
            search: item.key
        })
    }
    const handleChange = (value) => {
        let status = value == true ? 1 : 0
        dispatch({
            type: 'appList/editStatusAsync',
            payload: {
                id: item.id,
                status
            }
        })
    }
    const handlePropagation = (e) => {
        e.stopPropagation()
        console.log('22')
    }
    const handleDelete = (e) => {
        e.stopPropagation()
        MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            type: 'warning'
        }).then(() => {
            dispatch({
                type: 'appList/deleteAppAsync',
                payload: {
                    key: item.key
                }
            })
        })
    }
    const handleUploadCode = (e, type) => {
        e.stopPropagation()
        if (type == "android") {
            setAndroid(!androidShow)
            setIos(false)
            console.log(iosShow)
        } else {
            setIos(!iosShow)
            setAndroid(false)
        }
>>>>>>> 9-25 update
    }
    return (
        <div className="list_item" onClick={toDetail}>
            <ul>
                <li>
<<<<<<< HEAD
                    <img src={require("../../assets/images/apply_list/头像@2x.png")} alt="" />
                </li>
                <li>1111111</li>
                <li>2.1.0</li>
                <Tooltip
                    className="item"
                    effect="dark"
                    content="http://www.baidu.com"
                    placement="top-start">
                    <li>http://www.baidu.com</li>
                </Tooltip>
                <li>
                    <Switch
                        width={38}
                        value={true}
                        onText=""
                        offText="">
                    </Switch>
                </li>
                <li>{props.num}</li>
                <li>0</li>
                <li>2020-07-08</li>
                <li>
                    <Button type="primary" size="small">修改</Button>
                    <Button type="warning" size="small">删除</Button>
=======
                    <img src={item.icon} alt="" />
                </li>
                <li>{item.name}</li>
                <li>{item.version}</li>

                <li className="item">
                    <Qrcode
                        url={item.url}
                    />
                </li>
                <li onClick={(e) => handlePropagation(e)}>
                    <Switch
                        width={38}
                        value={item.status == 1 ? true : false}
                        onText=""
                        offText=""
                        onChange={handleChange}
                    >
                    </Switch>
                </li>
                <li>{item.install_num}</li>
                <li>{item.download_num}</li>
                <li>{item.create_time_fmt.split(" ")[0]}</li>
                <li>
                    <Button type="primary" size="small" onClick={toDetail}>修改</Button>
                    <Button type="warning" size="small" onClick={(e) => handleDelete(e)}>删除</Button>
>>>>>>> 9-25 update
                </li>
            </ul>
        </div>
    )
}

<<<<<<< HEAD
export default withRouter(ListItem)
=======
const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(ListItem))
>>>>>>> 9-25 update
