import { connect } from 'dva'
import { withRouter } from 'dva/router'
import { useState, useEffect } from 'react'

function UploadComp(props) {
    const { dispatch, type, fileType,has_android,has_ios } = props
    const { search } = props.location
    const key = search.split('?')[1]
    const handleUploadShow = () => {
        let operation_type = null
        if(has_ios == "1" && type == "ios"){
            operation_type = "update"
        }else if(has_ios == "0" && type == "ios"){
            operation_type = "bind"
        }else if(has_android == "1" && type == "android"){
            operation_type = "update"
        }else{
            operation_type = "bind"
        }
        dispatch({
            type: 'uploadModel/changeVisible',
            visible: true,
            operation_type,
            app_key: key,
            file_type: fileType
        })
    }
    const handleCloseUpdate = () => {

    }
    return (
        <div className="upload_comp">
            <div>
                <img src={require("../../assets/images/apply_list/缺省图.png")} alt="" />
            </div>
            <p>您还未上传{type}版本</p>
            <div onClick={handleUploadShow}>
                <img src={require("../../assets/images/apply_list/upload-fill备份.png")} alt="" />
                <span>上传</span>
            </div>
            {/* {isCloseUpdate ? <div className="close_update" onClick={handleCloseUpdate}>x</div> : null} */}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        visible: state.uploadModel.visible,
        has_android: state.appDetail.data.has_android,
        has_ios: state.appDetail.data.has_ios
    }
}

export default withRouter(connect(mapStateToProps)(UploadComp))