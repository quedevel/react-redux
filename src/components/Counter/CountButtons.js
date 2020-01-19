import React from 'react'
import { useDispatch } from 'react-redux'
import { increase, decrease } from '../../actions'

const CountButtons = () => {

    const dispatch = useDispatch()

    const handleInc = () => {
        dispatch(increase())
    }

    const handleDec = () => {
        dispatch(decrease())
    }

    return (
        <div>
            <button onClick={handleInc}>INC</button>
            <button onClick={handleDec}>DEC</button>
        </div>
    )
}

export default CountButtons


