
function animate(obj, target, callback) {
    clearInterval(obj.timer);//先清除以前的，才不会越来越快
    obj.timer = setInterval(function () {//给不同的对象
        var step = (target - obj.offsetLeft) / 100;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
           // if (callback) {
          //     callback();
          //  }
          callback&&callback();
          //如果左边对，才会看右边，如果左边假右边根本不看
        } else {

            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 5);
}