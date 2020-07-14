import React from 'react';
import { withRouter } from 'dva/router'
import { Switch, Button, Tooltip } from 'element-react'

function ListItem(props) {
    const { history } = props
    function toDetail() {
        history.push('/client/list_detail/1')
    }
    return (
        <div className="list_item" onClick={toDetail}>
            <ul>
                <li>
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
                </li>
            </ul>
        </div>
    )
}

export default withRouter(ListItem)