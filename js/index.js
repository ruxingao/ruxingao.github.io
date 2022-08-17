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
    window.location.href = "left2.html";
  });
  $(".wrap--3").on("click", function () {
    window.location.href = "https://github.com/ruxingao/Njupt-Big2";
  });
  $(".wrap--4").on("click", function () {
    window.location.href = "left1.html";
  });
  //
  //
  //
  //
});
