$(function () {
  //li经过就会显示
  $(".nav .context").on({
    mouseenter: function () {
      console.log($(this).children());
      $(this).children("div").stop().fadeIn();
    },
    mouseleave: function () {
      $(this).children().stop().fadeOut();
    },
  });
  //点击跳转
  $(".wrap--1").on("click", function () {
    window.location.href = "left.html";
  });
  $(".wrap--2").on("click", function () {
    window.location.href = "https://www.baidu.com/";
  });
  $(".wrap--3").on("click", function () {
    window.location.href = "https://www.baidu.com/";
  });
  $(".wrap--4").on("click", function () {
    window.location.href = "https://www.baidu.com/";
  });
  //
  //
  //
  //
});
