
export const increase = () => {
    return { type: 'COUNTER', payload: 'INC'}
}

export const decrease = () => {
    return { type: 'COUNTER', payload: 'DEC'}
}