
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

