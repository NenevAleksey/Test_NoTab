const sliderLine = document.querySelector('.slider-line');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const dots = document.querySelectorAll('.dot');
let position = 0;
let dotIndex = 0;

const nextSlide = () => {
   if (position < (dots.length - 1) * 500) {
      position += 500;
      dotIndex++;
   } else {
      position = 0;
      dotIndex = 0;
   }
   activeDot(dotIndex)
   sliderLine.style.left = -position + 'px';
}

const prevSlide = () => {
   if (position > 0) {
      position -= 500;
      dotIndex--;
   } else {
      position = (dots.length - 1) * 500;
      dotIndex = (dots.length - 1);
   }
   activeDot(dotIndex)
   sliderLine.style.left = -position + 'px';
}

const activeDot = (index) => {
   for(let dot of dots) {
      dot.classList.remove('active')
   }
   dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
   dot.addEventListener('click', () => {
      position = 500 * index
      sliderLine.style.left = -position + 'px';
      dotIndex = index;
      activeDot(dotIndex)
   })
})

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide)