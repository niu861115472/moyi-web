import React, { useRef, useState } from 'react';
import { connect } from 'dva'
import { Upload, Dialog, Progress } from 'element-react'
import {AppInfoParser1,uploadBefore} from './appInfoParser'

function UpLoad(props) {
    const uploader = useRef()
    const [percent, setPercent] = useState(0)
    const [showProgress,setShow] = useState(false)
    const handleCancel = () => {
        props.dispatch({
            type: 'uploadModel/changeVisible',
            visible: false
        })
    }
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
    return (
        <div className="upload">
            <Dialog
                title="应用上传"
                size="tiny"
                visible={props.visible}
                onCancel={handleCancel}
                lockScroll={false}
            >
                <Dialog.Body>
                    <Upload
                        ref={uploader}
                        className="upload-demo"
                        drag
                        accept=".ipa"
                        action="//test1.mojsoft.com/api/v1.Upload/uploadIpa"
                        showFileList
                        limit={1}
                        beforeUpload={beforeUpload}
                        onProgress={(e) =>onProgress(e)}
                        // onSuccess={(res) =>onSuccess(res)}
                        onChange={(file,fileList) => console.log(file,fileList)}
                        onRemove={() => setShow(false)}
                        httpRequest={newUpload}
                    >
                        <i className="el-icon-upload"></i>
                        <div className="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    </Upload>
                    {
                        showProgress ?
                        <Progress percentage={percent} /> : null
                    }
                    
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