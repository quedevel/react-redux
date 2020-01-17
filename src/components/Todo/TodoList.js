import React, {useEffect, useState} from 'react'

import axios from 'axios'

const TodoList = () => {

    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(1)
    const [arr, setArr] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/todos/list?page="+page)
        .then( (res) => {
            setArr(res.data.content);
            setTotal(res.data.totalPages)
        })
        // cleanup 은 다음 useEffect가 일어날때 이전에 실했되었던걸 먼저 뿌려주는 역할
        // return () => {
        //     console.log("cleanup");
        // }
    },[page])

    const handleNext = () => {
        if( page >= 1){
            setPage(page+1)
        } else {
            setPage(total)
        }
    }

    const handleBefore = () => {
        if( page < 1) {
            setPage(1)
        }else{
            setPage(page-1)
        }
    }

    console.log(page);
    console.log(total);

    const buttons = () => {
        let result = null
        if( page === 1 ){
            result = <button onClick={handleNext}>다음</button>
        } else if( page === total) {
            result = <button onClick={handleBefore}>이전</button>
        } else {
            result = <><button onClick={handleBefore}>이전</button><button onClick={handleNext}>다음</button></>
        }
        return result
    }

    const todoList = arr.map( t => <div className='todo-list' key={t.tno}><div className='tno'>{t.tno}</div><div className='title'>{t.title}</div><div className='date'>{t.targetDate}</div></div>)

    return(
        <div>
            <ul>
            <div className='todo-list'><div className='tno'>TNO</div><div className='title'>TITLE</div><div className='date'>REG-DATE</div></div>
                {todoList}
            </ul>
                {buttons()}
        </div>
    )
}

export default TodoList