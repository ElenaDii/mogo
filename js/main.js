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

  $(".ba-works").isotope({
    // options
    itemSelector: ".ba-grid-item",

    percentPosition: true,
    masonry: {
      columnWidth: ".ba-sizer"
    }
  });
  const $map = $("#map");
  var London = { lat: 51.507351, lng: -0.127758 };
  // The map, centered at London
  var map = new google.maps.Map($map[0], {
    zoom: 15,
    center: London
  });
  // The marker, positioned at London
  var marker = new google.maps.Marker({ position: London, map: map });
});
