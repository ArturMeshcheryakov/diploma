const slider = () => {
  const gallerySliders = document.querySelector('.gallery-slider.js-slider');
  const mainSlider = document.querySelector('.main-slider.js-slider');
  const servicesSlider = document.querySelector('.services-slider.js-slider');

  const carousel = (slider, time) => {
    if (!slider) return;

    const slide = slider.querySelectorAll('.slide');
    const dots = slider.querySelector('.js-slider-dots');
    let dot;
    let currentSlide = 0;
    let interval;

    const addDot = () => {
      dot = document.createElement('div');
      dot.classList.add('slider-dot');

      for (let i = 0; i < slide.length; i++) {
        dot = dot.cloneNode();
        dots.append(dot);
      }

      dot = slider.querySelectorAll('.slider-dot');
      dot[0].classList.add('dot-active');
    };

    if (dots) addDot();

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlay = () => {
      prevSlide(slide, currentSlide, 'slide-active');
      if (dots) prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;

      if (currentSlide >= slide.length) currentSlide = 0;

      nextSlide(slide, currentSlide, 'slide-active');
      if (dots) nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time) => {
      interval = setInterval(autoPlay, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault();

      const target = event.target;
      const slideNext = target.closest('.slider-next');
      const slidePrev = target.closest('.slider-prev');
      const slideDot = target.closest('.slider-dot');

      if (!slideNext && !slidePrev && !slideDot) return;

      prevSlide(slide, currentSlide, 'slide-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (slideNext) currentSlide++;
      else if (slidePrev) currentSlide--;
      else if (slideDot) {
        dot.forEach((item, index) => {
          if (item === target) currentSlide = index;
        });
      }

      if (currentSlide >= slide.length) currentSlide = 0;
      if (currentSlide < 0) currentSlide = slide.length - 1;

      nextSlide(slide, currentSlide, 'slide-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    if (time) {
      slider.addEventListener('mouseover', (event) => {
        const target = event.target;
        const slideArrow = target.closest('.slider-arrow');
        const slideDot = target.closest('.slider-dot');
        const slideElem = target.closest('.slide');

        if (slideDot || slideArrow || slideElem) stopSlide();
      });

      slider.addEventListener('mouseout', (event) => {
        const target = event.target;
        const slideArrow = target.closest('.slider-arrow');
        const slideDot = target.closest('.slider-dot');
        const slideElem = target.closest('.slide');

        if (slideDot || slideArrow || slideElem) startSlide(time);
      });

      startSlide(time);
    }
  };

  const tapeCarousel = (slider) => {
    if (!slider) return;

    const tape = slider.querySelector('.js-slider-carousel');
    const slide = slider.querySelectorAll('.slide');
    let showElem = 5;
    const margin = +getComputedStyle(slide[0]).marginRight.replace('px', '') * 2;
    const padding = +getComputedStyle(slider).paddingRight.replace('px', '') * 2;
    let width = slide[0].offsetWidth + margin;
    let position = 0;

    const response = () => {
      const width = window.screen.width;

      if (width >= 1200) showElem = 5;
      if (width < 1200) showElem = 4;
      if (width < 992) showElem = 3;
      if (width < 768) showElem = 2;
      if (width < 481) showElem = 1;
    };

    window.addEventListener('resize', () => {
      response();
      responseCarousel(showElem);
    });

    const responseCarousel = (showElem) => {
      slider.style.width = (width * showElem) + padding + 'px';
    };

    const next = () => {
      if (-position === slide.length * width - (showElem * width)) {
        position = 0;
      } else {
        position -= width;
      }

      tape.style.transform = `translateX(${position}px)`;
    };

    const prev = () => {
      if (position === 0) {
        position = (slide.length * width - (showElem * width)) * (-1);
      } else {
        position += width;
      }

      tape.style.transform = `translateX(${position}px)`;
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault();

      const target = event.target;
      const slideNext = target.closest('.slider-next');
      const slidePrev = target.closest('.slider-prev');

      if (!slideNext && !slidePrev) return;
      if (slideNext) next();
      if (slidePrev) prev();

    });

    response();
    responseCarousel(showElem);
  };

  carousel(gallerySliders, 2000);
  carousel(mainSlider, 3000);
  tapeCarousel(servicesSlider);
};

export default slider;
