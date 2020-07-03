import React, { Component, Fragment } from 'react';
import { Link } from 'dva/router';
import Child from '../components/Child'

class UserIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleToIndex = this.handleToIndex.bind(this)
    }
    handleToIndex(){
        console.log(this.props)
        this.props.history.push('/')
    }
    render() {
        return (
            <Fragment>
                <div>我是用户页</div>
                <Link to="/">首页</Link>
                <button onClick={this.handleToIndex}>首页</button>
                <Child />
            </Fragment>
        );
    }
}

export default UserIndex;