$(document).ready(function () {
  console.log("Script file loaded");
  $(".slider-container").slick({
    autoPlay: true,
    autoplaySpeed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
  });

  $("#card").on("click", function () {
    console.log("On click");
    const productId = 5;
    window.location.href =
      "/project/product-details.html?productId=" + productId;
  });
});
