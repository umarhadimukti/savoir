window.addEventListener('scroll', function() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((item, i) => {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  })
});

const scrollContent = function(content) {
  const container = document.querySelector(`.container${content}`);
  container.scrollIntoView();
};

function hideNavbar() {
  // scroll functions
  $(window).scroll(function(e) {
    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $('.navbar').addClass("navbar-hide");
    } else {
        $('.navbar').removeClass("navbar-hide");
    }
  });
}
hideNavbar();

const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centerSlide: 'true',
  fade: 'true',

  slidesPerView: 3,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centerSlide: 'true',
  fade: 'true',

  slidesPerView: 3,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

VanillaTilt.init(document.querySelectorAll(".card-team"), {
  max: 25,
  speed: 800
});

// ketika tombol whatsapp di hover
function handleHoverWhatsapp() {
  const btnWhatsapp = document.querySelector('.btn-whatsapp');
  btnWhatsapp.addEventListener('mouseover', function(e) {
    document.querySelector('.bi-whatsapp').style.color = 'rgb(6, 97, 6)';
  })
  btnWhatsapp.addEventListener('mouseout', function(e) {
    document.querySelector('.bi-whatsapp').style.color = 'rgb(67, 226, 67)';
  })
}

handleHoverWhatsapp();