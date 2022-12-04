$(document).ready( () => {
    const slickOptions = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider_prev">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider_next">Next</button>;'
    }

      $('.slider').slick(slickOptions);

    });

  