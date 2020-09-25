<<<<<<< HEAD
import React, { Component,Fragment } from 'react';

function Main(props){

    return (
        <Fragment>
            <el-main>
                
            </el-main>
=======
import React, { Component, Fragment } from 'react';

const Cooperation = (props) => {
    return (
        <div className="cooperation_case">
            <h1>合作案例</h1>
            <ul>
                <li><img src={require("../../assets/images/home/阿里云.png")} alt="" /></li>
                <li><img src={require("../../assets/images/home/百度智能云.png")} alt="" /></li>
                <li><img src={require("../../assets/images/home/北京区块链协会.png")} alt="" /></li>
                <li><img src={require("../../assets/images/home/并购博物馆.png")} alt="" /></li>
                <li><img src={require("../../assets/images/home/启迪控股.png")} alt="" /></li>
                <li><img src={require("../../assets/images/home/中国中小企业协会.png")} alt="" /></li>
                <li><img src={require("../../assets/images/home/jingshi-logo.png")} alt="" /></li>
                <li><img src={require("../../assets/images/home/聚空间.png")} alt="" /></li>
            </ul>
        </div>
    )
}

function Main(props) {

    return (
        <Fragment>
            <div className="mian">
                <div className="main_bg"></div>
                <div className="mian_list">
                    <ul>
                        <li>
                            <img src={require("../../assets/images/home/编组 3.png")} alt="" />
                            <p>APP分发托管</p>
                            <p>一键上传ios或Android应用到某某某</p>
                            <p>扫描二维码下载安装</p>
                            <p>实名用户每天送免费下载点</p>
                            <button>立即体验</button>
                        </li>
                        <li>
                            <img src={require("../../assets/images/home/编组 11.png")} alt="" />
                            <p>iOS企业签名</p>
                            <p>使用企业证书签名的IOS应用</p>
                            <p>无需提交APP Store</p>
                            <p>就可以实现应用的下载安装</p>
                            <button>立即体验</button>
                        </li>
                        <li>
                            <img src={require("../../assets/images/home/编组 12.png")} alt="" />
                            <p>iOS超级签名</p>
                            <p>按设备数量收费</p>
                            <p>支持账号公有池或私有池</p>
                            <button>立即体验</button>
                        </li>
                        <li>
                            <img src={require("../../assets/images/home/编组 13.png")} alt="" />
                            <p>网页封装</p>
                            <p>只需提供一个网页链接</p>
                            <p>即可将网页制作成APP</p>
                            <button>立即体验</button>
                        </li>
                    </ul>
                </div>
                <div className="welfare">
                    <h1>注册领取多款免费福利</h1>
                    <div className="welfare_btn">
                        <button>免费试用</button>
                        <button>立即注册</button>
                    </div>
                </div>
                <Cooperation />
            </div>
>>>>>>> 9-25 update
        </Fragment>
    )
}

export default Main