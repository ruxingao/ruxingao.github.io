$(function () {
  //li经过就会显示
  $(".nav .context").on({
    mouseenter: function () {
      console.log($(this).children());
      $(this).children("div").css("display", "block");
    },
    mouseleave: function () {
      $(this).children().css("display", "none");
    },
  });
  //点击跳转
  $(".wrap--1").on("click", function () {
    window.location.href = "https://www.baidu.com/";
  });
  $(".wrap--2").on("click", function () {
    window.location.href = "https://www.baidu.com/";
  });
  $(".wrap--3").on("click", function () {
    window.location.href = "https://www.baidu.com/";
  });
  //
  //
  //
  //
  //
});
