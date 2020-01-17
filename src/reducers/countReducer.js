

const initState = {count:0}

export default function countReducer(state=initState,action){

    const {type, payload} = action

    if(type ==! "COUNTER") return state

    if(payload === "INC"){
        return {count: state.count+1}
    }else if(payload === "DEC"){
        return {count: state.count-1}
    }


    return state
}