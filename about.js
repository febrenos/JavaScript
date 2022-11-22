//DOM Document Object Model
//DOM is an access objs js have

location
event.preventDefault()
document.html
navigator.appCodeName
navigator.userAgent

document.getElementById('title')
document.getElementByTagName('div')
document.getElementByClassName('test')
let title = document.querySelectorAll('h1')[0]
let title = document.querySelector('h1')
title.textContent = 'New Title'
title.innerHTML = 'New Title'
let img = document.querySelector('#picture')
img.setAttribute('src','../img/test.png')
img.setAttribute('width','280px')
title.style.color = 'red';
box[0].setAttribute('class', 'darkMode')
box[0].removeAttribute('class')
title.classList.add('dark')
title.classList.remove('white')

// procedure
function helloW1(){
  console.log('Hello World!')
}
// function
function helloW2(){
  return 'Hello World!'
}
// parameterized function
function helloW3(a,b){
  console.log(a+b)
}
// anonymous function
title.addEventListener('click', function(){
  console.log('Hello')
})

// arrow function
const testArrow = () => document.write('hello World!')
const testArrow = () => '<p>Hello World!</p>'
