$(function () {
  "use strict";

  const $window = $(window);
  const $navbar = $(".navbar");

  // Mobile navigation.
  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("actived");
    $(".navbar-collapse").toggleClass("menu-opened");
  });

  // Sticky navigation.
  $window.on("scroll", function () {
    $navbar.toggleClass("is-sticky", $window.scrollTop() > 50);
  });

  // Smooth scrolling for internal links.
  $('a[href^="#"]').on("click", function (event) {
    const target = $(this.getAttribute("href"));

    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        { scrollTop: target.offset().top - 80 },
        500
      );

      $(".navbar-toggler").removeClass("actived");
      $(".navbar-collapse").removeClass("menu-opened");
    }
  });

  // Back to top, when the existing control is present.
  const $scrollTopBtn = $("#scrollTopBtn");

  $window.on("scroll", function () {
    $scrollTopBtn.toggleClass("actived", $window.scrollTop() > 700);
  });

  $scrollTopBtn.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  // Existing template components are optional; initialise them only when
  // their markup is actually present.
  if ($(".slick-carousel").length && $.fn.slick) {
    $(".slick-carousel").slick();
  }

  // Lightweight GenAI service-card interaction.
  $(".genai-use-case").on("click", function () {
    const useCase = $(this).data("use-case");
    const prompt = $("#genaiPrompt");

    if (prompt.length && useCase) {
      prompt.val(
        "I want to explore " +
          useCase +
          " for my business. What would the approach, benefits, and first steps look like?"
      );
      prompt.trigger("focus");
      $("html, body").animate(
        { scrollTop: $("#genai-section").offset().top - 80 },
        500
      );
    }
  });
});
