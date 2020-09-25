<<<<<<< HEAD
import react from 'react'
import { Pagination } from 'element-react'
import './style.css'

function PaginationIndex(){

    return (
        <div className="pagination">
            <Pagination layout="prev, pager, next" total={500} />
=======
import { Pagination } from 'element-react'
import { connect } from 'dva'
import './style.css'

function PaginationIndex(props) {
    const handlePageChange = (val) => {
        props.dispatch({
            type: `${props.space}/${props.asyncFunc}`,
            payload: {
                page: val
            }
        })
    }
    return (
        <div className="pagination">
            <Pagination
                layout="prev, pager, next"
                pageSize={props.pageSize}
                total={props.total}
                space={props.space}
                asyncFunc={props.asyncFunc}
                onCurrentChange={(val) => handlePageChange(val)}
            />
>>>>>>> 9-25 update
        </div>
    )
}

<<<<<<< HEAD
export default PaginationIndex
=======
const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps)(PaginationIndex)
>>>>>>> 9-25 update
