$(document).ready(function () {

    //Wow content animate=====================
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

// counter jq code===================
     $('.counter').counterUp({
        delay:10,
        time:2000
    });

     // scroll top======================
          $('.totop').tottTop({
            scrollTop:1000,
            scrtollTopBtnDuration:500,
            duration:100,
        });
// Lightbox video play==============
    $(".animate-video-btn").modalVideo();

// features owl carousel=================
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        autoplaySpeed:3000,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
            }
        }
    });




 
    
});

// js code start here================
const mainMenu = document.querySelector('.header-menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

