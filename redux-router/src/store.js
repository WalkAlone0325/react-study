import { applyMiddleware, createStore, combineReducers } from 'redux'
import { user, todo } from './reducer'
// import reducer from './reducer'
import thunk from 'redux-thunk'

// function user() {}
// function todo() {}

const store = createStore(combineReducers({ user, todo }), applyMiddleware(thunk))

// export default createStore(reducer, applyMiddleware(thunk))
export default store
