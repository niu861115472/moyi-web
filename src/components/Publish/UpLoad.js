import React, { useRef, useState } from 'react';
import { connect } from 'dva'
import { Upload, Dialog, Progress } from 'element-react'
<<<<<<< HEAD
import {AppInfoParser1,uploadBefore} from './appInfoParser'

function UpLoad(props) {
    const uploader = useRef()
    const [percent, setPercent] = useState(0)
    const [showProgress,setShow] = useState(false)
    const handleCancel = () => {
        props.dispatch({
=======
import { AppInfoParser1, uploadBefore } from './appInfoParser'
import { withRouter } from 'dva/router'

function UpLoad(props) {
    const uploader = useRef()
    const { dispatch, visible, operation_type, app_key, file_type } = props
    const [percent, setPercent] = useState(0)
    const [showProgress, setShow] = useState(false)
    const { search } = props.location
    const key = search.split('?')[1]
    const handleCancel = () => {
        dispatch({
>>>>>>> 9-25 update
            type: 'uploadModel/changeVisible',
            visible: false
        })
    }
<<<<<<< HEAD
    const beforeUpload = (file) =>{
        uploadBefore(file)
    }
    const newUpload = (params) => {
        AppInfoParser1(params.file, uploader.current.props)
        
    }
    const onProgress = (e) =>{
        let progressLength = 0
        const interval = setInterval(() => {
            if(progressLength >= e.percent){
                console.log(progressLength)
                clearInterval(interval)
                return
            }
            setPercent(progressLength+=1)
            setShow(true)
        }, 20);
    }
=======
    const handleRemove = (file, fileList) => {
        setShow(false)
    }
    const beforeUpload = (file) => {
        uploadBefore(file)
    }
    const newUpload = (params) => {
        AppInfoParser1(params.file, uploader.current.props, operation_type, app_key)

    }
    const onProgress = (e) => {
        let progressLength = 0
        const interval = setInterval(() => {
            if (progressLength >= e.percent) {
                console.log(progressLength)
                clearInterval(interval)
                setShow(false)
                return
            }
            setPercent(progressLength += 1)
            setShow(true)
        }, 20);
    }
    const handleOnSuccess = (type) => {
        if (type.operation_type != "new") {
            dispatch({
                type: "appDetail/getHeadInfoAsync",
                payload: { key }
            })
            if(type.app_type == "ios"){
                dispatch({
                    type: "appDetail/getIosInfoAsync",
                    payload: { key }
                })
            }else{
                dispatch({
                    type: "appDetail/getAndroidInfoAsync",
                    payload: { key }
                })
            }
        }
    }
>>>>>>> 9-25 update
    return (
        <div className="upload">
            <Dialog
                title="应用上传"
                size="tiny"
<<<<<<< HEAD
                visible={props.visible}
=======
                visible={visible}
>>>>>>> 9-25 update
                onCancel={handleCancel}
                lockScroll={false}
            >
                <Dialog.Body>
                    <Upload
                        ref={uploader}
                        className="upload-demo"
                        drag
<<<<<<< HEAD
                        accept=".ipa"
                        action="//test1.mojsoft.com/api/v1.Upload/uploadIpa"
                        showFileList
                        limit={1}
                        beforeUpload={beforeUpload}
                        onProgress={(e) =>onProgress(e)}
                        // onSuccess={(res) =>onSuccess(res)}
                        onChange={(file,fileList) => console.log(file,fileList)}
                        onRemove={() => setShow(false)}
=======
                        accept={file_type}
                        action="//test1.mojsoft.com/api/v1.Upload/uploadIpa"
                        showFileList
                        limit={2}
                        beforeUpload={beforeUpload}
                        onProgress={(e) => onProgress(e)}
                        onSuccess={handleOnSuccess}
                        onChange={(file, fileList) => console.log(file, fileList)}
                        onRemove={(file, fileList) => handleRemove(file, fileList)}
>>>>>>> 9-25 update
                        httpRequest={newUpload}
                    >
                        <i className="el-icon-upload"></i>
                        <div className="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    </Upload>
                    {
                        showProgress ?
<<<<<<< HEAD
                        <Progress percentage={percent} /> : null
                    }
                    
=======
                            <Progress percentage={percent} /> : null
                    }

>>>>>>> 9-25 update
                </Dialog.Body>
            </Dialog>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
<<<<<<< HEAD
        visible: state.uploadModel.visible
    }
}

export default connect(mapStateToProps)(UpLoad)
=======
        visible: state.uploadModel.visible,
        operation_type: state.uploadModel.operation_type,
        app_key: state.uploadModel.app_key,
        file_type: state.uploadModel.file_type
    }
}

export default withRouter(connect(mapStateToProps)(UpLoad))
>>>>>>> 9-25 update
