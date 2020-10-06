import { createStore } from 'redux'

function countFn(state = { count: 5 }, action) {
  // action.type 代表修改指令，该指令可以自定义
  switch (action.type) {
    case 'COUNT_PLUS':
      // 根据 action 指令，修改state并返回新的state
      return { count: state.count + 1 }
    case 'COUNT_REDUCE':
      return { count: state.count - 1 }
    default:
      break
  }
  return state
}

let store = createStore(countFn)

export default store
