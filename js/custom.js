//banner slider
$('.banner-slick-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<span class="prev-arr"><i class="fa-solid fa-circle-arrow-left"></i></span>',
    nextArrow: '<span class="next-arr"><i class="fa-solid fa-circle-arrow-right"></i></span>'
  });

  //service slider
  $('.service-content').slick({
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    prevArrow: '<span class="prev-arr"><i class="fa-solid fa-angle-up"></i></i></span>',
    nextArrow: '<span class="next-arr"><i class="fa-solid fa-angle-down"></i></span>',
    vertical: true
  });