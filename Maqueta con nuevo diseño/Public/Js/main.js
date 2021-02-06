jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5
});

$(function () {
    $(".navigation-icon").click(function () {
      $(".navigation").toggleClass('navigation-open');
    });

    $(".fa-search").click(function () {
        if (!$(".search").hasClass("active")) {
            $(".search").addClass("active");
        }
    })

    $(".fa-times-circle").click(function () {
        $(".search").removeClass("active");
    })

    $('.select').select2();
  });

