$(document).ready( () => {
    const slickOptions = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider_prev">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider_next">Next</button>;'
    }

      $('.slider').slick(slickOptions);

      $('form-submit').on('click', () => {
        const value = $('#email').val();
        Email.send({
            Host : "smtp.yourisp.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );

      }
      
      )
    });
