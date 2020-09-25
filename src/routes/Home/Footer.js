<<<<<<< HEAD
import React, { Component,Fragment } from 'react';

function Footer(props){

    return (
        <Fragment>
            <el-footer>
                
            </el-footer>
        </Fragment>
=======
import React from 'react';

function Footer(props) {

    return (
        <div className="footer">
            <div className="top_info">
                <div className="company_info">
                    <div>
                        <img src={require("../../assets/images/home/logo.png")} alt="" />
                    </div>
                    <div>
                        <h1>公司名</h1>
                        <p>GSMOR.COM</p>
                    </div>
                </div>
                <div className="about_us all_list">
                    <h4>关于我们</h4>
                    <ul>
                        <li>公司介绍</li>
                        <li>服务协议</li>
                        <li>审核规则</li>
                        <li>文档中心</li>
                    </ul>
                </div>
                <div className="product_preview all_list">
                    <h4>产品概览</h4>
                    <ul>
                        <li>分发托管</li>
                        <li>企业签名</li>
                        <li>超级签名</li>
                        <li>网页封装</li>
                    </ul>
                </div>
                <div className="contact_us all_list">
                    <h4>联系我们</h4>
                    <ul>
                        <li>客服邮箱：2788383@wyd’</li>
                        <li>QQ：172830480</li>
                        <li>公司地址：杭州市西湖区西溪首座6号楼888室</li>
                    </ul>
                </div>
            </div>
            <p className="archiva">浙ICP备17283904号-0  浙公网安备29488905081902号</p>
        </div>
>>>>>>> 9-25 update
    )
}

export default Footer