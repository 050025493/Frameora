
  const track1 = document.querySelector('.hero-image-track');
  const slides1 = document.querySelectorAll('.hero-image-track .slide');

  let index1 = 0;

  setInterval(() => {
    index1 = (index1 + 1) % slides1.length;
    track1.style.transform = `translateX(-${index1 * 100}%)`;
  }, 4000);

  const track2 = document.querySelector('.img-track');
  const slides2 = document.querySelectorAll('.img-track .slide');

  let index2 = 0;

  setInterval(() => {
    index2 = (index2 + 1) % slides2.length;
    track2.style.transform = `translateX(-${index2 * 100}%)`;
  }, 4000);



document.addEventListener('DOMContentLoaded', function() {

    // 1. text slider
    // waits for image follow the images
    const perfTextSwiper = new Swiper('.perfume-text-swiper', {
        direction: 'vertical',
        slidesPerView: 1,
        loop: true,             
        allowTouchMove: false,  // Disable manual swiping on text
        speed: 1000,            // Smooth animation speed
        effect: 'slide'
    });

    // 2. image swiper
    const perfImageSwiper = new Swiper('.perfume-image-swiper', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 40,
        loop: true,
        speed: 1000,  // Matches text speed
        grabCursor:true,          
        
        // autoplay
        autoplay: {
            delay: 1500,                
            disableOnInteraction: false, // dot interacion
            pauseOnMouseEnter: true     // when hovered it is stopped
        },

        pagination: {
            el: '.perfume-pagination',
            clickable: true,
        }
    });

    // 3. images slider forces text to move with it
   
    perfImageSwiper.on('slideChange', function () {
        const activeIndex = perfImageSwiper.realIndex;
        perfTextSwiper.slideToLoop(activeIndex, 1000);
    });
});





