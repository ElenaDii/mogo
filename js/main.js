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
  // SCROLL

  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});
