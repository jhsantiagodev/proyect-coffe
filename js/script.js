//Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
   // grabCursor: true, //cambio en el original
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//nav open and close
const body =  document.querySelector("body");
const navMenu = body.querySelector(".menu-content");
const navOpenBtn = body.querySelector(".navOpen-btn");
const navCloseBtn = navMenu.querySelector(".navClose-btn");

    if(navMenu && navOpenBtn){
        navOpenBtn.addEventListener("click", () => {
            navMenu.classList.add("open");
            body.style.overflowY = "hidden";
        });
    }

    if(navMenu && navCloseBtn){
        navCloseBtn.addEventListener("click", () => {
            navMenu.classList.remove("open");
            body.style.overflowY = "scroll";
        })
    }
    