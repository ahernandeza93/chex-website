$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// ---- Navbar dropdown JS
// const $dropdown = $(".dropdown");
// const $dropdownToggle = $(".dropdown-toggle");
// const $dropdownMenu = $(".dropdown-menu");
// const showClass = "show";

// $(window).on("load resize", function() {
//   if (this.matchMedia("(min-width: 768px)").matches) {
//     $dropdown.hover(
//       function() {
//         const $this = $(this);
//         $this.addClass(showClass);
//         $this.find($dropdownToggle).attr("aria-expanded", "true");
//         $this.find($dropdownMenu).addClass(showClass);
//       },
//       function() {
//         const $this = $(this);
//         $this.removeClass(showClass);
//         $this.find($dropdownToggle).attr("aria-expanded", "false");
//         $this.find($dropdownMenu).removeClass(showClass);
//       }
//     );
//   } else {
//     $dropdown.off("mouseenter mouseleave");
//   }
// });
//---------------
// ---- GSAP JS for Jumbotron
var timeline3 = new TimelineMax()
  .from("aside", {
    duration: 1,
    delay: 1,
    x: -150,
    opacity: 0
  })

  .from(".fade-down", { opacity: 0, duration: 1, y: -50 });

if ($(window).width() >= 1024) {
  // ----  JS for Services
  function updatePercentage() {
    tl.progress();
  }
  const controller = new ScrollMagic.Controller();

  var tl = new TimelineMax({ onUpdate: updatePercentage });
  tl.from(".services-img--1", 0.8, { x: -200, opacity: 0 });
  tl.from(".services-img--2", 0.8, { x: 200, opacity: 0 });
  tl.from(".services__container", 0.5, { x: 50, opacity: 0 });
  new ScrollMagic.Scene({ triggerElement: ".services" })
    // .setClassToggle(".image-1", "is-visible") // add class toggle
    .setTween(tl)
    .addTo(controller);
  // const scene = new ScrollMagic.Scene({
  //   triggerElement: ".services",
  //   triggerHook: "onLeave",
  //   duration: "90%"
  // })
  // .setPin(".services")
  // .setTween(tl)
  // .addTo(controller);

  var tl2 = new TimelineMax();
  tl2.from(".information__container", 0.5, { x: -200, opacity: 0 });

  const scene2 = new ScrollMagic.Scene({
    triggerElement: ".information",
    triggerHook: "onEnter",
    duration: "90%"
  })
    .setTween(tl2)
    .addTo(controller);

  var tl3 = new TimelineMax();
  tl3.from(".offers", 0.5, { y: 200, opacity: 0 });
  const scene3 = new ScrollMagic.Scene({
    triggerElement: ".offers",
    triggerHook: "onEnter",
    duration: "90%"
  })
    .setTween(tl3)
    .addTo(controller);

  var tl4 = new TimelineMax();
  tl4.from(".work__logos", 0.5, { x: 50, opacity: 0 });
  const scene4 = new ScrollMagic.Scene({
    triggerElement: ".work",
   
  })
    .setTween(tl4)
    .addTo(controller);
}
