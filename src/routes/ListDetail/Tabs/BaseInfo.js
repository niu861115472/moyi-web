<<<<<<< HEAD
import React, { Component } from 'react';
import { Input } from 'element-react'

function BaseInfo() {
=======
import React, { useState, useEffect } from 'react';
import { Input } from 'element-react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'

function BaseInfo(props) {
    const { data, dispatch } = props
    const [company, setCompany] = useState("")
    const [type, setType] = useState('')
    const [introduce, setVersion] = useState('')
    const [instructions, setApply] = useState('')
    const { search } = props.location
    const key = search.split('?')[1]
    useEffect(() =>{
        setCompany(data.company)
        setType(data.type)
        setVersion(data.introduce)
        setApply(data.instructions)
    })
    useEffect(() => {
        dispatch({
            type: 'appDetail/getBaseInfoAsync',
            payload: {
                key
            }
        })
    }, [])
    const handleSaveInfo = () => {
        // dispatch({
        //     type: 'appDetail/saveBaseInfoAsync',
        //     payload: { key, type, company, introduce, instructions }
        // })
    }
    const handleChange = (event, key) => {
        if (key == 'company') {
            setCompany(event.target.value)
            return
        }
        if (key == 'type') {
            setType(event.target.value)
            return
        }
        if (key == 'introduce') {
            setVersion(event)
            return
        }
        if (key == 'instructions') {
            setApply(event)
            return
        }
    }
>>>>>>> 9-25 update

    return (
        <div className="base_info">
            <div className="distribute">
                <p>分发图标</p>
<<<<<<< HEAD
                <img className="icon" src={require('../../../assets/images/a.jpg')} alt="" />
=======
                <img className="icon" src={data.icon} alt="" />
>>>>>>> 9-25 update
            </div>
            <div className="service distribute">
                <div>
                    <p>服务商/公司</p>
<<<<<<< HEAD
                    <input className="input" type="text" placeholder="暂无" />
                </div>
                <div>
                    <p>类别</p>
                    <input className="input" type="text" placeholder="暂无" />
=======
                    <input
                        defaultValue={data.company}
                        className="input"
                        type="text"
                        placeholder="暂无"
                        onChange={(e) => handleChange(e, 'company')}
                    />
                </div>
                <div>
                    <p>类别</p>
                    <input
                        defaultValue={data.type}
                        className="input"
                        type="text"
                        placeholder="暂无"
                        onChange={(e) => handleChange(e, 'type')}
                    />
>>>>>>> 9-25 update
                </div>
            </div>
            <div className="textarea">
                <p>版本描述</p>
                <Input
                    type="textarea"
                    rows={8}
<<<<<<< HEAD
                    placeholder="暂无"
                />
            </div>
            <div className="textarea">
            <p>应用描述</p>
                <Input
                    type="textarea"
                    rows={8}
                    placeholder="暂无"
                />
            </div>
            <div className="save_btn">保存</div>
=======
                    defaultValue={data.introduce}
                    placeholder="暂无"
                    onChange={(e) => handleChange(e, 'introduce')}
                />
            </div>
            <div className="textarea">
                <p>应用描述</p>
                <Input
                    type="textarea"
                    rows={8}
                    defaultValue={data.instructions}
                    placeholder="暂无"
                    onChange={(e) => handleChange(e, 'instructions')}
                />
            </div>
            <div className="save_btn" onClick={handleSaveInfo}>保存</div>
>>>>>>> 9-25 update
        </div>
    )
}

<<<<<<< HEAD
export default BaseInfo
=======
const mapStateToProps = (state) => {
    return {
        data: state.appDetail.baseData
    }
}

export default withRouter(connect(mapStateToProps)(BaseInfo))
>>>>>>> 9-25 update
