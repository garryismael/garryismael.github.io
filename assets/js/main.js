AOS.init();

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector("header > nav");
const links = document.querySelectorAll(".navigations li");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeMenu");
const mobileLinks = document.querySelectorAll(".mobile-link");

const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

// Carousel
const rootNode = document.querySelector(".embla");
const viewportNode = rootNode.querySelector(".embla__viewport");
const prevButtonNode = rootNode.querySelector(".embla__prev");
const nextButtonNode = rootNode.querySelector(".embla__next");

const options = { loop: false };
const emblaApi = EmblaCarousel(viewportNode, options);

prevButtonNode.addEventListener("click", emblaApi.scrollPrev, false);
nextButtonNode.addEventListener("click", emblaApi.scrollNext, false);

const projectNode = document.querySelector(".embla_project");
const projectViewportNode = projectNode.querySelector(
  ".embla__viewport_project"
);
const prevProjectButtonNode = projectNode.querySelector(".embla__prev_project");
const nextProjectButtonNode = projectNode.querySelector(".embla__next_project");

const projectOptions = { loop: false };
const emblaProjectApi = EmblaCarousel(projectViewportNode, projectOptions);

prevProjectButtonNode.addEventListener(
  "click",
  emblaProjectApi.scrollPrev,
  false
);
nextProjectButtonNode.addEventListener(
  "click",
  emblaProjectApi.scrollNext,
  false
);

const openMenu = () => {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
  document.body.classList.add("no-scroll");
};

hamburger.addEventListener("click", openMenu);

const closeMenu = () => {
  mobileMenu.classList.add("translate-x-full");
  mobileMenu.classList.remove("translate-x-0");
  document.body.classList.remove("no-scroll");
};

closeBtn.addEventListener("click", closeMenu);
mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));
