import css from './css/index.less'
import logo from './img/logo192.png'

var img = new Image()
img.src = logo
img.classList.add('logo')

var root = document.getElementById('root')
root.append(img)

console.log(css, css.toString())
