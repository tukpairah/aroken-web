(function () {
  document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', function (e) {
      const burgerIcon = e.target.closest('.burger-icon');
      const navLink = e.target.closest('.nav__link');

      if (!burgerIcon && !navLink) return;

      if (window.innerWidth > 900) return;

      document.body.classList.toggle('body--opened-menu');
    });
  });
})();

new Swiper('.hero__swiper', {
  slidesPerView: 2,
  spaceBetween: 40,

  navigation: {
    nextEl: '.hero-section__next',
    prevEl: '.hero-section__prev',
  },

  loop: true,

  breakpoints: {
    601: {
      slidesPerView: 3,
    },
    801: {
      spaceBetween: 32,
    },
    1101: {
      slidesPerView: 3,
    }
  }
});

const dots = document.querySelectorAll('.dot');
const shoeImage = document.querySelector('.hero__img-main img');

dots.forEach(dot => {
  dot.addEventListener('click', () => {

    dots.forEach(d => d.classList.remove('active'));

    dot.classList.add('active');

    const newShoe = dot.dataset.shoe;

    shoeImage.classList.add('fade-out');

    setTimeout(() => {
      shoeImage.src = newShoe;
      shoeImage.classList.remove('fade-out');
    }, 300);
  });
});

new Swiper('.main__brands', {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  grabCursor: true,
  speed: 800,

  autoplay: {
    delay: 100,
    disableOnInteraction: false,
  },

  breakpoints: {
    601: {
      slidesPerView: 3,

    },
    801: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
    1101: {
      slidesPerView: 5,
    }
  }
});

const modal = document.querySelector('.modal');
const joinBtn = document.querySelector('.join__btn'); 
const cancelBtn = document.querySelector('.modal__cancel');

joinBtn.addEventListener('click', () => {
  modal.classList.add('open');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target === cancelBtn) {
    modal.classList.remove('open');
  }
});











