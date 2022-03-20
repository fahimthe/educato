$(function(){
  $('.work_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll:1,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    
  });
      



  $('.testimonial_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    
  });



  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  
  




});

 