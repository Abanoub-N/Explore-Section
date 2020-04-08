$(document).ready(function() {
  $(".navbar .navbar-nav li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  $(window).on("scroll", function() {
    var scrolling = $(window).scrollTop();

    if (scrolling >= 70) {
      $(".navbar").addClass("transparent");
    } else {
      $(".navbar").removeClass("transparent");
    }
  });

  $(".navbar a").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top - 80
      },
      1500
    );
  });

  $(window).on("scroll", function() {
    var sc = $(window).scrollTop();

    if (sc > 500) {
      $(".up").fadeIn(700);
    } else {
      $(".up").fadeOut(700);
    }
  });

  $(".up").click(function() {
    $("body , html").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });

  $(function() {
    "use strict";
    $(".counter").counterUp({
      delay: 10,
      time: 2000
    });
  });

  new TypeIt("#simpleUsage", {
    speed: 200,
    startDelay: 900,
    loop: true
  })
    .type("A Photographer.")
    .pause(3000)
    .delete(16)
    .pause(500)
    .type("Kerri Deo.")
    .pause(3000)
    .delete(11)
    .pause(500)
    .type("A Graphic Designer.")
    .pause(3000)
    .delete(19)
    .pause(500)
    .go();
});

var mixer = mixitup(".gallary");

mixer = {
  selectors: {
    target: ".blog-item"
  },
  animation: {
    duration: 300
  }
};
