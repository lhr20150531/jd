/* index.js */

window.onload = function(){
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 2000,//自动切换的时间间隔
        speed: 1000,//切换速度
        loop: true,//设置true，开启loop模式，会自动在第一个li前面添加最后一个li，在最后一个li后面添加第一个li
        initialSlide: 0,//li显示的索引，从第几张图片开始切换
        pagination: '.swiper-pagination',//分页
        autoplayDisableOnInteraction : false,//设置false，用户操作swiper之后不会默认禁止autoplay
        observer:true,
        observeParents:true,//当weiper的父元素发生改变时，例如window.resize，swiper更新
    })

    var mySwiper1 = new Swiper('.advert-pro1', {
        autoplay: 2000,//可选选项，自动滑动，手指触屏滑动会停止自动轮播
        initialSlide :0,//初始显示的li的索引
        speed : 1000,//滑动的速度
        observer:true,//当li节点被修改的时候自动更新Swiper
        observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
        pagination : '.swiper-pagination1',//下面的图标跟随切换
        loop : true,//无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
    });

    var mySwiper1 = new Swiper('.advert-pro2', {
        autoplay: 2000,//可选选项，自动滑动，手指触屏滑动会停止自动轮播
        initialSlide :0,//初始显示的li的索引
        speed : 1000,//滑动的速度
        observer:true,//当li节点被修改的时候自动更新Swiper
        observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
        pagination : '.swiper-pagination2',//下面的图标跟随切换
        loop : true,//无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
    });

    var mySwiper1 = new Swiper('.advert-pro3', {
        autoplay: 2000,//可选选项，自动滑动，手指触屏滑动会停止自动轮播
        initialSlide :0,//初始显示的li的索引
        speed : 1000,//滑动的速度
        observer:true,//当li节点被修改的时候自动更新Swiper
        observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
        pagination : '.swiper-pagination3',//下面的图标跟随切换
        loop : true,//无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
    });

    var mySwiper4 = new Swiper('.secskill-content', {
        initialSlide :0,//初始显示的li的索引
        speed : 1000,//滑动的速度
        observer:true,//当li节点被修改的时候自动更新Swiper
        observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
        slidesPerView : 3,
    });

    //掌上秒杀 获取倒计时对象
    var oCountDown = document.getElementById("countdown"),
        oNum = oCountDown.getElementsByClassName("timer-num");
    var time = new Date();
    time.setFullYear(2017);
    time.setMonth(8);
    time.setDate(24);
    time.setHours(12);
    time.setMinutes(0);
    time.setSeconds(0);
    var endTime = time.getTime();//获取1970.1.1至2017.9.24的毫秒数

    function changeTime(time,obj1,obj2,obj3){
        var nowTime = new Date().getTime();//现在的时间
        var diff = (endTime - nowTime)/1000;//相差多少秒
        if(diff > 0){
            var H = Math.floor(diff/3600);//小时
            diff = diff%3600;//剩下多少秒
            var M = Math.floor(diff/60);
            diff = Math.floor(diff%60);
            obj1.innerHTML = addZero(H);
            obj2.innerHTML = addZero(M);
            obj3.innerHTML = addZero(diff);
        }else{
            clearInterval(timer);
        }
    }
    changeTime(endTime,oNum[0],oNum[1],oNum[2]);

    var timer = setInterval(function(){
        changeTime(endTime,oNum[0],oNum[1],oNum[2]);
    },1000);

    function addZero(obj){
        var str = "";
        str = obj<10?"0"+obj:obj;
        return str;
    }

    //返回顶部
    var goTop = document.getElementById("goTop");
    var search = document.getElementById("search");
    window.onscroll = function(){
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        if(top > 0){
            search.style.backgroundColor = "rgba(208,55,67,0.85)";
        }else{
            search.style.backgroundColor = "";
        }
        if(top > 400){
            goTop.style.display = "block";
        }else{
            goTop.style.display = "none";
        }
    };
    goTop.onclick = function(){
        if(document.body.scrollTop){
            document.body.scrollTop = 0;
        }else{
            document.documentElement.scrollTop = 0;
        }
    };
};


