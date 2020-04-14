// Slide Left

// $(window).scroll(function() {
//   alert("mtn");
//   if ($(this).scrollTop() > 100) {
//     if ($(".slide-box").hasClass("visible") == false) {
//       $(".slide-box")
//         .stop()
//         .animate(
//           {
//             right: "0px"
//           },
//           function() {
//             $(".slide-box").addClass("visible");
//           }
//         );
//     }
//   } else {
//     if ($(".slide-box").hasClass("visible") == true) {
//       $(".slide-box")
//         .stop()
//         .animate(
//           {
//             right: "-3000px"
//           },
//           function() {
//             $(".slide-box").removeClass("visible");
//           }
//         );
//     }
//   }
// });

(function() {
  const elements = document.querySelectorAll(".slide-box");
  const animTitles = function() {
    elements.forEach(function(element) {
      var positionElement = element.offsetTop;
      var heightElement = element.offsetHeight / 3;
      if (
        document.documentElement.scrollTop >
        positionElement - window.innerHeight + heightElement
      ) {
        $(element).css({ transform: "translateX(0)" });
      }
    });
  };
  window.addEventListener("scroll", animTitles);
  window.addEventListener("load", animTitles);
})();

// Fade In

$.fn.scrollBottom = function() {
  return $(document).height() - $(this).scrollTop() - $(this).height();
};

$(window).scroll(function() {
  if (document.documentElement.scrollTop < 275) { //offset
    $(".card").addClass("fade");
  }
});

//Search

$("#myInput").on("keyup", function() {
  let value = $(this)
    .val()
    .toLowerCase();
  $(".myDiv *").filter(function() {
    $(this).toggle(
      $(this)
        .text()
        .toLowerCase()
        .indexOf(value) > -1
    );
  });
});
