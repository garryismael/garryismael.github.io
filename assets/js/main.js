AOS.init();

const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 8,
    breakpoints: {
      // when window width is >= 640px
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    centeredSlides: true,
    centeredSlidesBounds: true,
    // Optional parameters
    direction: "horizontal",
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      dynamicMainBullets: 3
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  const hamburger = document.querySelector(".hamburger");
  const navigation = document.querySelector("header > nav");
  const links = document.querySelectorAll(".navigations li");
  
  hamburger.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburger.classList.toggle("open");
  
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  });
  

  const year = document.querySelector("#year");

  year.textContent = new Date().getFullYear();
