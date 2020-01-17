import React from 'react'
import CountDisplay from './CountDisplay'
import CountButtons from './CountButtons'

const CountWrapper = () => {
    return(
        <div className='count-wrapper'>
            <CountDisplay></CountDisplay>
            <CountButtons></CountButtons>
        </div>
    )
}
export default CountWrapper