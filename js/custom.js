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

  //talks
  $('.talks-writting-holder').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.talks-picture-holder'
  });
  $('.talks-picture-holder').slick({
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.talks-writting-holder',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<span class="prev-arr"><i class="fa-solid fa-angle-up"></i></i></span>',
    nextArrow: '<span class="next-arr"><i class="fa-solid fa-angle-down"></i></span>',
    vertical: true
  });