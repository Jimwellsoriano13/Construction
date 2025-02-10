// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

const filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  })
}


// THIS IS FOR HERO JS CODE

let swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,

  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },

  speed: 800,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: { // For screens 500px and above
      slidesPerView: 1,
      spaceBetween: 120,
    },
    450: { // For screens 500px and above
      slidesPerView: 1,
      spaceBetween: 120,
    },
    968: { // For larger screens
      slidesPerView: 2,
      spaceBetween: 120,
    }
  },
});



