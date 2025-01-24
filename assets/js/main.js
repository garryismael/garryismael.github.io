AOS.init();

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector("header > nav");
const links = document.querySelectorAll(".navigations li");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamburger.classList.toggle("open");

  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

// Carousel
const rootNode = document.querySelector(".embla");
const viewportNode = rootNode.querySelector(".embla__viewport");
const prevButtonNode = rootNode.querySelector(".embla__prev");
const nextButtonNode = rootNode.querySelector(".embla__next");

const options = { loop: false };
const emblaApi = EmblaCarousel(viewportNode, options);

prevButtonNode.addEventListener('click', emblaApi.scrollPrev, false)
nextButtonNode.addEventListener('click', emblaApi.scrollNext, false)
