/*--- typed ---*/
var typed = new Typed(".element", {
  strings: [
    "radimo custom WP",
    "postavljamo sajt na server.",
    "radimo front-end sajta.",
  ],
  typeSpeed: 30,
  loop: true,
  showCursor: true,
  cursorChar: "|",
  backDelay: 700,
});

/*--- slider ---*/
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  smartSpeed: 700,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

/*--- news ---*/
let news = document.querySelector(".news");
const showNews = () => {
  news.classList.toggle("showNews");
  setTimeout(() => {
    clearInterval(interval);
  }, 2000);
};
const interval = setInterval(showNews, 2000);
