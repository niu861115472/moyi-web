import React, { Component } from 'react';
import { connect } from 'dva'
import * as apis from '../services/example'

class IndexPage extends Component {
  constructor(props) {
    super(props)
  }
  handleSetName() {
    this.props.dispatch({
      type: 'indexTest/setName',
      data: {
        name: '知足住下'
      }
    })
  }
  handleSetNameAsync(){
    this.props.dispatch({
      type: 'indexTest/setNameAsync',
      data: {
        name: '知足住下'
      }
    })
  }
  componentDidMount(){
    //测试mock
    apis.mockData().then(res =>{
      console.log(res)
    })
  }
  testCnode(){
    this.props.dispatch({
      type: 'indexTest/testCode'
    })
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <div>我是首页{this.props.msg}</div>
        <p>{this.props.name}</p>
        <button onClick={this.handleSetName.bind(this)}>setName</button>
        <button onClick={this.handleSetNameAsync.bind(this)}>setNameAsync</button>
        <button onClick={this.testCnode.bind(this)}>testCnode</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    msg: '1111',
    name: state.indexTest.name,
    cnodeData:state.indexTest.cnodeData
  }
}

export default connect(mapStateToProps)(IndexPage);
