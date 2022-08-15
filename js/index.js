$(function () {
  //li经过就会显示
  $(".context").on({
    mouseenter: function () {
      console.log($(this).children());
      $(this).children("div").css("display", "block");
    },
    mouseleave: function () {
      $(this).children().css("display", "none");
    },
  });

  //
  //
  //
  //
  //
});
