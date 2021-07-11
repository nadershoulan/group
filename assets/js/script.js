$(document).ready(function() {


    if ($('.bbb_viewed_slider').length) {
        var viewedSlider = $('.bbb_viewed_slider');

        viewedSlider.owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: false,
            dots: false,
            responsive: {
                0: { items: 1 },
                575: { items: 2 },
                768: { items: 3 },
                991: { items: 4 },
                1199: { items: 6 }
            }
        });

        if ($('.bbb_viewed_prev').length) {
            var prev = $('.bbb_viewed_prev');
            prev.on('click', function() {
                viewedSlider.trigger('prev.owl.carousel');
            });
        }

        if ($('.bbb_viewed_next').length) {
            var next = $('.bbb_viewed_next');
            next.on('click', function() {
                viewedSlider.trigger('next.owl.carousel');
            });
        }
    }


});


/////////////////

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

////// this a scroll down btn script v1

  $(document).ready(function() {
        $(".down").click(function() {
            $('html, body').animate({
                scrollTop: $(".up").offset().top
            }, 1000);
        });
    });
////end of the script 

////// this a scroll down btn script v2
  $(document).ready(function() {
        $(".dd").click(function() {
            $('html, body').animate({
                scrollTop: $(".hh").offset().top
            }, 1000);
        });
    });
////end of the script 

////// this a scroll down btn script v2

  $(document).ready(function() {
        $(".vision").click(function() {
            $('html, body').animate({
                scrollTop: $(".message").offset().top
            }, 1000);
        });
    });
////end of the script 
////// this a scroll down btn script v2

  $(document).ready(function() {
        $(".messaage").click(function() {
            $('html, body').animate({
                scrollTop: $(".goal").offset().top
            }, 1000);
        });
    });
////end of the script 
////// this a scroll down btn script v2

  $(document).ready(function() {
        $(".goal").click(function() {
            $('html, body').animate({
                scrollTop: $(".word").offset().top
            }, 1000);
        });
    });
////end of the script 
////// this a scroll down btn script v2

  $(document).ready(function() {
        $(".goal").click(function() {
            $('html, body').animate({
                scrollTop: $(".word").offset().top
            }, 1000);
        });
    });
////end of the script 