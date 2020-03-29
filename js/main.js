 $(document).ready(function(){

  var navLink = document.querySelectorAll("nav ul li .nav-link");
  // scroll nav bar
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){
      $(".sidenavbutton").addClass("navbarfixed");
      $(".web").addClass("navbarfixed");
      navLink.forEach((item)=>{
        $(item).addClass('nav-link-color');
      });
      $(".side-icon").css("color","#000");
    }else{
      $(".sidenavbutton").removeClass("navbarfixed");
      $(".web").removeClass("navbarfixed");
      navLink.forEach((item)=>{
        $(item).removeClass('nav-link-color');
      });
      $(".side-icon").css("color","#fff");
    }
  })

  //typed js plugin
  var typed = new Typed('.type', {
    strings: [ 
      " Digital",
      "Creative"
    ],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
  });

  // slider of company
  var swiper = new Swiper('.cliet__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // init: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    }
  });

  // nice scroll
  $("body").niceScroll({
    cursorcolor: '#6D51FB',
    cursorwidth: '8px',
    cursorborder: '1px solid #6D51FB',
  });
  

  var textWrapper = document.querySelector('.header-name .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({loop: false})
  .add({
    targets: '.header-name .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.header-name',
    // opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  function animeanimatio(){
    var textWrapper = document.querySelector('.welcome__about__slag');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: true})
    .add({
      targets: '.welcome__about__slag .letter',
      opacity: [0,1],
      easing: "linear",
      duration: 2250,
      delay: (el, i) => 150 * (i+1)
    }).add({
      targets: '.welcome__about__slag',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  }

  animeanimatio();


  // draw sgv

    var svg = $('.svg-icon-client').drawsvg({
      duration: 3500,
      stagger: 5000,
      reverse: true,
      callback: function() {
        animate();
      },
    });
    function animate() {
      svg.drawsvg('animate');  
    }

    animate();

//counter
$('.counter').counterUp({
  delay: 10,
  time: 1000
});


});





function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}