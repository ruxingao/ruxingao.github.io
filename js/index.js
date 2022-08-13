window.addEventListener('load',function(){
var prev=this.document.querySelector('.tb-promo').querySelector('.prev');
//console.log(prev);
var next=this.document.querySelector('.tb-promo').querySelector('.next');
//经过图片显示按钮
var focus=this.document.querySelector('.tb-promo');
focus.addEventListener('mouseenter',function(){
    prev.style.display='block';
    next.style.display='block';
    clearInterval(timer);
    timer=null;
})
//离开隐藏
focus.addEventListener('mouseleave',function(){
    prev.style.display='none';
    next.style.display='none';
    timer=setInterval(function(){
        next.click();//手动调用点击事件
        },2000);
})
//小圆圈的数量
var ul=focus.querySelector('ul');
var nav=this.document.querySelector('.nav');
var focusWidth=focus.offsetWidth;
nav.style.width=13*ul.children.length+'px';
//自动创建小圆圈
for(i=0;i<ul.children.length;i++){
    var li=document.createElement('li');//创建节点
    li.setAttribute('index',i);//把索引号利用一下，不能直接用i我也不知道为什么
nav.appendChild(li);//插入节点
//点击小圆圈就跳转
li.addEventListener('click',function(){
    for(i=0;i<nav.children.length;i++){
        nav.children[i].className="";
    }
    this.className='select';
    var index=this.getAttribute('index');
    num=index;
    circle=index;
    animate(ul,-index*focusWidth);
})
}
nav.children[0].className='select';
//克隆第一张
var first=ul.children[0].cloneNode(true);
ul.appendChild(first);
//点击next按钮就会下一张
var num=0;
var circle=0;
//节流阀
var flag=true;
next.addEventListener('click',function(){
if(flag){
    flag=false;
    if(num==ul.children.length-1){
        ul.style.left=0;
        num=0;
    }
        num++;
        //利用回调函数恢复flag
        animate(ul,-num*focusWidth,function(){
            flag=true;
        });
    circle++;
    if(circle==nav.children.length){
        circle=0;
    }
    //小圆圈也跟着动
    for(i=0;i<nav.children.length;i++){
        nav.children[i].className="";
    }
    nav.children[circle].className="select";
}
})
//左侧按钮
prev.addEventListener('click',function(){
if(flag){
    flag=false;
    if(num==0){
        num=ul.children.length-1;
        ul.style.left=-num*focusWidth+'px';
    }
        num--;
        animate(ul,-num*focusWidth,function(){
            flag=true;
        });
    circle--;
    if(circle<0){
        circle=nav.children.length-1;
    }
    //小圆圈也跟着动
    for(i=0;i<nav.children.length;i++){
        nav.children[i].className="";
    }
    nav.children[circle].className="select";
}
})
//自动播放
var timer=setInterval(function(){
next.click();//手动调用点击事件
},2000);







})