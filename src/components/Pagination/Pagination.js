import react from 'react'
import { Pagination } from 'element-react'
import './style.css'

function PaginationIndex(){

    return (
        <div className="pagination">
            <Pagination layout="prev, pager, next" total={500} />
        </div>
    )
}

export default PaginationIndex