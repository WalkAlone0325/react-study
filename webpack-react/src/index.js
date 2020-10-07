import css from './css/index.less'
import logo from './img/logo192.png'
import './App.jsx'

var img = new Image()
img.src = logo
img.classList.add('logo')

var root = document.getElementById('root')
root.append(img)

console.log(css, css.toString())
if (module.hot) {
  // 通知webpack该模块接收hmr
  module.hot.accept(err => {
    if (err) {
      console.error('Cannot apply HMR update.', err)
    }
  })
}

// ES6
const arr = [new Promise(() => {}), new Promise(() => {})]

arr.map(item => {
  console.log(item)
})
