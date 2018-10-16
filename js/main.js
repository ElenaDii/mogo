$(document).ready(function() {
  $(".slider").slick({
    dots: true
  });

  let $descriptions = $(".item__description");

  $("body").on("click", ".item__title", function() {
    const $this = $(this);
    const $description = $this.next();

    if ($description.is(":hidden")) {
      $descriptions.hide("slow");
      $description.show("slow");
    }
  });

  $(".slider-02").slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000
  });
});
