import React, { Component } from 'react';
import { connect } from 'dva'
import { Upload, Dialog } from 'element-react'

function UpLoad(props) {

    const handleCancel = () => {
        console.log('111')
        props.dispatch({
            type: 'uploadModel/changeVisible',
            visible: false
        })
    }

    return (
        <div className="upload">
            <Dialog
                title="提示"
                size="tiny"
                visible={props.visible}
                onCancel={handleCancel}
                lockScroll={false}
            >
                <Dialog.Body>
                    <Upload
                        className="upload-demo"
                        drag
                        accept="file"
                        action="//jsonplaceholder.typicode.com/posts/"
                        multiple
                        showFileList
                    >
                        <i className="el-icon-upload"></i>
                        <div className="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    </Upload>
                </Dialog.Body>
            </Dialog>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        visible: state.uploadModel.visible
    }
}

export default connect(mapStateToProps)(UpLoad)