import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const initialState = {
    number: 8
}

reducer = (state, action) => {
    if (action.type === 'INC') {
        state = { ...state, number: state.number + 1 }
    } else if (action.type === 'DEC') {
        state = { ...state, number: state.number - 1 }
    }
    return state
}


const incrementNumber = () => {
    return { type: 'INC' }
}

// const myMiddleware = (state) => (action) => (next) => {
//     console.log("ini adalah logger saya")
//     next(action)
// }

const middleware = applyMiddleware(logger)

const store = createStore(reducer, initialState, middleware)

export {
    store,
    incrementNumber
}