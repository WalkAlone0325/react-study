const data = [
  // 设置一些默认数据
  { id: 0, title: '示例数据', done: true },
  { id: 1, title: '示例数据', done: false },
  { id: 2, title: '示例数据', done: false },
]

// 第一种方式
function todo(todo = data, action) {
  switch (action.type) {
    case 'TODO_ADD':
      return [
        ...todo,
        {
          id: Date.now(),
          title: action.title,
          done: false,
        },
      ]
    case 'TODO_DONE':
      todo.forEach(item => {
        if (item.id === action.id) {
          item.done = action.done
        }
      })
      return [...todo]
    case 'TODO_EDIT':
      todo.forEach(item => {
        if (item.id === action.id) {
          item.title = action.title
        }
      })
      return [...todo]
    case 'TODO_REMOVE':
      todo = todo.filter(item => item.id !== action.id)
      return todo
    case 'TODO_REMOVE_DONE':
      todo = todo.filter(item => !item.done)
      return todo
    default:
      return todo
  }
}

function user(user = {}, action) {
  switch (action.type) {
    case '':
      return

    default:
      break
  }
  return user
}

// function reducer(state = {}, action) {
//   return {
//     user: user(state.user, action),
//     todo: todo(state.todo, action),
//   }
// }

// export default reducer
export { todo, user }
