const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button'); 
const btnNext = document.getElementById('next-button'); 

let currentSlide = 0; 

function hideSlider() { 
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() { 
    slider[currentSlide].classList.add('on')
}

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})