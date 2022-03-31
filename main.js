const buttonDown = document.querySelector('.button') 
const about = document.querySelector('#about')

buttonDown.addEventListener('click', function(){ 
    about.classList.toggle('show')
})