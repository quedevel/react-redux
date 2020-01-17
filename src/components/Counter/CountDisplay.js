import React from 'react'
import { connect } from 'react-redux'

const CountDisplay = ({ count }) => {

    return (
        <div>
            <h1>COUNT: {count}</h1>
        </div>
    )
}

const mapStateToProps = ({ countReducer }) => {
    return countReducer
}

export default connect(mapStateToProps)(CountDisplay)