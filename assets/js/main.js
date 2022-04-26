runEvents();

function runEvents() {
// Header Transition on scroll
window.addEventListener("scroll", changeMainHeaderStyle);

// Toggle about tabs
document
.querySelector("#home-about .buttons")
.addEventListener("click", toggleAboutTab);

//Toggle HODs tabs
document
.querySelector("#HOD .buttons")
.addEventListener("click", toggleHodTab);

}








// Toggle about tabs
function toggleAboutTab(e) {
const buttons = document.querySelectorAll("#home-about .buttons button");

const panels = document.querySelectorAll("#home-about .panels div");

// > Check the selected button
buttons.forEach((button) => {
    if (e.target.className === button.className) {
    // > Save selected button className
    const selectedBtnClass = button.className;
    // > Change button background color
    button.style.backgroundColor = "#026623";

    // > Compare selected button to its marching panel
    panels.forEach((panel) => {
        if (panel.classList.contains(selectedBtnClass)) {
        panel.style.display = "block";
        } else {
        panel.style.display = "none";
        }
    });
} else {
button.style.backgroundColor = "#03db20";
}
});
}


// Toggle HOD tabs
function toggleHodTab(e) {
const buttons = document.querySelectorAll("#HOD .buttons button");

const panels = document.querySelectorAll("#HOD .panels .hod-wrapper");

// > Check the selected button
buttons.forEach((button) => {
if (e.target.className === button.className) {
// > Save selected button className
const selectedBtnClass = button.className;
// > Change button background color
button.style.backgroundColor = "#026623";

// > Compare selected button to its marching panel
panels.forEach((panel) => {
    if (panel.classList.contains(selectedBtnClass)) {
    panel.style.display = "block";
    } else {
    panel.style.display = "none";
    }
});
} else {
button.style.backgroundColor = "#03db20";
}
});
}




//Home page Slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}



//  Team members Swiper
// window.addEventListener("resize", updateSwiperSize);
// window.addEventListener("load", updateSwiperSize);
// window.addEventListener("orientationchange", updateSwiperSize);
// window.addEventListener("resize", updateSwiperSize);

// function updateSwiperSize() {
//   let windowWidth = window.screen.width;
//   if (windowWidth <= 500) {
//     myTeamSwiper(1);
//   } else if (windowWidth > 500 && windowWidth <= 769) {
//     myTeamSwiper(2);
//   } else {
//     myTeamSwiper(3);
//   }
// }
// function myTeamSwiper(slidesPerView) {
//   var swiper = new Swiper(".about-team .swiper-container", {
//     slidesPerView: slidesPerView,
//     spaceBetween: 30,
//     slidesPerGroup: slidesPerView,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// }



// Change the main header styling on page scroll
function changeMainHeaderStyle() {
  if (window.scrollY > 40) {
    document.querySelector("#home-header").style.borderBottomColor =
      "#fb841b33";
    document.querySelector("#home-header").style.height = "60px";
    document.querySelector("#home-header .top-section").style.maxHeight = "0%";
    document.querySelector("#home-header .bottom-section").style.height =
      "100%";
    document.querySelector(
      "#home-header .bottom-section .menu-wrap"
    ).style.height = "100%";
    // > Brand Logo
    document.querySelector("#home-header .branding img").style.width = "4rem";
    // document.querySelector("#home-header h1 a").style.fontSize = "4rem";
  } else {
    document.querySelector("#home-header").style.borderBottomColor =
      "transparent";
    document.querySelector("#home-header").style.height = "90px";
    document.querySelector("#home-header .top-section").style.maxHeight = "45%";

    document.querySelector("#home-header .bottom-section").style.height = "55%";
    document.querySelector(
      "#home-header .bottom-section .menu-wrap"
    ).style.height = "100%";

    // > Brand Logo
    document.querySelector("#home-header .branding img").style.width = "4rem";
    // document.querySelector("#home-header h1 a").style.fontSize = "1.2rem";

    // > Using media queries to style header on smartphones
    var x = window.matchMedia("(max-width: 1100px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction); // Attach listener function on state changes
    function myFunction(x) {
      if (x.matches) {
        document.querySelector("#home-header .bottom-section").style.height =
          "100%";
      } else {
        document.querySelector("#home-header .bottom-section").style.height =
          "55%";
      }
    }
  }
}



// slider or carousell
$('.news-wrapper').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  //making the slider responsive
  responsive: [
  {
  breakpoint: 1024,
  settings: {
  slidesToShow: 2,
  slidesToScroll: 3,
  infinite: true,
  dots: true
  }
  },
  {
  breakpoint: 600,
  settings: {
  slidesToShow: 2,
  slidesToScroll: 2
  }
  },
  {
  breakpoint: 480,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1
  }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
  });
  

  // var slideIndex = 1;
  // showSlides(slideIndex);
  
  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }
  
  // function currentSlide(n) {
  //   showSlides(slideIndex = n);
  // }
  
  // function showSlides(n) {
  //   var i;
  //   var slides = document.getElementsByClassName("mySlides");
  //   var dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) {slideIndex = 1}
  //     if (n < 1) {slideIndex = slides.length}
  //     for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //     }
  //     for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(" active", "");
  //     }
  //   slides[slideIndex-1].style.display = "block";
  //   dots[slideIndex-1].className += " active";
  // }

  // slider or carousell for HODS
$('.hod-wrapper').slick({
slidesToShow: 2,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
nextArrow: $('.next'),
prevArrow: $('.prev'),
//making the slider responsive
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 2,
slidesToScroll: 1,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});