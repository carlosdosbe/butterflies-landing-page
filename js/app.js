//Toggle
function toggle()
{
  const menu = document.querySelector('.toggle');
  const navigation = document.querySelector('.navigation');
  menu.classList.toggle('active');
  navigation.classList.toggle('active');
}

//Slider
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
});
