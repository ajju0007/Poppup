const popup=document.querySelector('.popup')
const button=document.querySelector('button')
const close_icon=document.querySelector('.close_icon')

button.addEventListener('click',()=>{
   popup.classList.add('open')
})
close_icon.addEventListener('click',()=>{
   popup.classList.remove('open')
})
