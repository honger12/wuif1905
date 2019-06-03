window.onload = function () {
  /*  let list = document.getElementById('list');
    list.onmouseenter=function () {
        list.style.background = '#000';
    }
    list.onmouseleave = function () {
        list.style.background = '#fff';
    }

    let list2 = document.getElementById('list2');
    list2.onmouseenter=function () {
        list2.style.background = 'red';
    }
    list2.onmouseleave = function () {
        list2.style.background = '#fff';
    }

    let list3 = document.getElementById('list3');
    list3.onmouseenter=function () {
        list3.style.background = '#00c1de';
    }
    list3.onmouseleave = function () {
        list3.style.background = '#fff';
    }


    let list4 = document.getElementById('list4');
    list4.onmouseenter=function () {
        list4.style.background = 'blue';
    }
    list4.onmouseleave = function () {
        list4.style.background = '#fff';
    }
*/
    //轮播点(颜色改变)ok
    let btnList = document.getElementsByClassName('btnList');
    let bannerPointer = btnList[0].getElementsByTagName('li');
   /* for (let i = 0; i <bannerPointer.length ; i++){
        bannerPointer[i].onmouseenter = function() {
            this.style.background = 'blue';
            // console.log(i);
        }
        bannerPointer[i].onmouseleave = function () {
            this.style.background = '#fff';
        }
    }*/


    //个人博客日志——下划线ok
    let diaryList = document.getElementsByClassName('diaryList')[0];
    let listLi = diaryList.getElementsByTagName('li');
    // console.dir(diaryList);
    // console.dir(listLi);
    for (let i = 0 ; i <listLi.length;i++){
        listLi[i].onclick = function () {
            for (let j = 0 ; j < listLi.length ; j++){
                listLi[j].style.borderBottom='none';
            }
            // this.style.marginBottom = '18px';
            this.style.borderBottom = '2px solid #000';
        }
    }
   /* //个人博客日志——下划线
    /!*想要使用定位来添加下划线  但是使用的方法classList应该是错误的
    该实现出错
    * *!/
    let diaryLists = document.querySelectorAll('.diaryList > li');
    // console.dir(diaryLists);
    diaryLists.forEach(function(elem,value){
        console.dir(elem);
        // console.log(value);
        elem.onmouseenter = function(){
            for (let i = 0 ; i < diaryLists.length ; i++) {
                elem[i].classList.remove('this::before');
            }
            this.classList.add('this::before')

            /!* //不可以使用classList.toggle()方法
             for (let i = 0 ; i < tabList.length ; i++) {
                     tabList[i].classList.toggle('hot');
                 }*!/
        }
    })*/


   /* //安静的做个爱设计的女子
    //方法一————自己尝试（有些许的失败）
    let tabList = document.getElementsByClassName('tabList')[0];
    let tabListLi = tabList.getElementsByTagName('li');
    let liSpan = tabList.getElementsByTagName('span');
    let liP = tabList.getElementsByTagName('p');
    console.dir(tabList);
    console.dir(tabListLi);
    console.dir(liSpan);
    console.dir(liP);
    for(let i = 0 ; i < tabListLi.length ; i++){
        tabListLi[i].onmouseenter = function () {
            for(let j = 0 ; j <tabListLi.length;j++){
                tabListLi[j].style['height']='30px';
                tabListLi[j].style.zIndex='999';
                console.log(tabListLi[j].style.height);
            }
          /!*  tabListLi.style['height']='88px';
            tabListLi.style = 'z-index:999';*!/
            this.style.height='88px';
            // this.style = 'z-index:999';

        }
       /!*liSpan[i].onclick = function () {
           console.log(1);
       }*!/
    }

    for(let i = 0 ; i <liP.length;i++){
        liP[i].onmouseenter = function () {
            for(let j = 0 ; j < liP.length ; j++){
                // this.style.height = '48px';
                liP[j].style.display = 'none';
                // console.log(liP[j].style.length);
            }
            this.style.height = '48px';
            // liP[j].style.display = 'none';
        }
    }

    */


    //安静的做个爱设计的女子ok
    let tabList = document.querySelectorAll('.tabList > li');

   /* tabList.forEach(function(elem,value){
        console.log(elem);
        console.log(value);
        elem.onmouseenter = function(){
            for (let i = 0 ; i < tabList.length ; i++) {
                tabList[i].classList.remove('hot');
            }
            this.classList.add('hot')

           /!* //不可以使用classList.toggle()方法
            for (let i = 0 ; i < tabList.length ; i++) {
                    tabList[i].classList.toggle('hot');
                }*!/
        }
    })*/
//    第二种方法采用ver+闭包
    for (var i = 0 ; i < tabList.length ; i++){
        tabList[i].onmouseenter = (function (i) {
            return function () {
                for (let j = 0 ;j < tabList.length ; j++){
                    tabList[j].classList.remove('hot');
                }
                tabList[i].classList.add('hot');
                return false;
            }
        })(i)
    }

//轮播图（左右按钮--点击时图片变动）ok
//    index 保存窗口中显示是图片的下标
//    current当前图片
//    next下一张图片
//     let index = 0 ;
    let current=0,next=0;
    let rightBtn = document.querySelector('.rightBtn');
    let leftBtn = document.querySelector('.leftBtn');
    let bannerImg = document.querySelectorAll('.bannerImg > li');
    let w = bannerImg[0].offsetWidth;
    let flag = true;
    // console.log(bannerImg);
    /*rightBtn lrftBtn 的点击事件（初级版本—没有什么动画）ok
    rightBtn.onclick = function () {
        index++;
        if(index == bannerImg.length){
            index=0;
        }
        bannerImg.forEach(function (ele) {
            ele.style.zIndex = 1;
        })
        bannerImg[index].style.zIndex = 999;

        Array.from(bannerPointer,function (elem) {
            elem.classList.remove('hot');
        })
        bannerPointer[index].classList.add('hot');
    }
    leftBtn.onclick = function () {
        index--;
        if(index < 0){
            index=bannerImg.length - 1;
        }
        bannerImg.forEach(function (ele) {
            ele.style.zIndex = 1;
        })
        bannerImg[index].style.zIndex = 999;

        Array.from(bannerPointer,function (elem) {
            elem.classList.remove('hot');
        })
        bannerPointer[index].classList.add('hot');
    }
*/

    rightBtn.onclick = function(){
        if(!flag){
            return;
        }
        flag=false;
        next++;

        if(next==bannerImg.length){
            next=0;
        }
        bannerImg[next].style.left =w +'px';
        animate(bannerImg[current],{left:-w});
        animate(bannerImg[next],{left:0},function () {
            flag=true;
        });
        bannerPointer[current].classList.remove('hot');
        bannerPointer[next].classList.add('hot');
        current = next;
    }
    leftBtn.onclick = function(){
        if(!flag){
            return;
        }
        flag=false;
        next--;

        if(next<0){
            next=bannerImg.length-1;
        }
        bannerImg[next].style.left =-w +'px';
        animate(bannerImg[current],{left:w});
        animate(bannerImg[next],{left:0},function () {
            flag=true;
        });
        bannerPointer[current].classList.remove('hot');
        bannerPointer[next].classList.add('hot');
        current = next;
    }

    // 动画效果版本animate.js
/*

   // 动画效果版本animate.js
    rightBtn.onclick = function () {
        index++;
        if(index == bannerImg.length){
            index=0;
        }
        bannerImg.forEach(function (ele) {
            ele.style.zIndex = 1;
            animate(ele,{opacity:0});
        })
        bannerImg[index].style.zIndex = 999;

        Array.from(bannerPointer,function (elem) {
            elem.classList.remove('hot');
        })
        bannerPointer[index].classList.add('hot');
        animate(ele,{opacity:1});
    }
*/


   /* //轮播点以下自由练习不ok
    let btnList = document.getElementsByClassName('btnList');
    let bannerPointer = btnList[0].getElementsByTagName('li');
    for (let i = 0; i <bannerPointer.length ; i++){
        bannerPointer[i].onmouseenter = function() {
            this.style.background = 'blue';
            // console.log(i);
            index++;
            if(index == bannerImg.length){
                index=0;
            }
            bannerImg.forEach(function (ele) {
                ele.style.zIndex = 1;
            })
            bannerImg[index].style.zIndex = 999;

        }
        bannerPointer[i].onmouseleave = function () {
            this.style.background = '#fff';
        }
    }*/
    //轮播点以下自由练习不ok
  /*  let indexs = 0;
    let btnLists = document.querySelectorAll('.btnList > li');
    let bannerImgs = document.querySelectorAll('.bannerImg > li');
    console.log(btnLists);
    btnLists.onmouseenter = function () {
        indexs++;
        if(indexs == btnLists.length){
            indexs=0;
        }
        bannerImgs.forEach(function (ele) {
            ele.style.zIndex = 1;
        })
        bannerImgs[indexs].style.zIndex = 999;
    }*/

  /*   //轮播点（实现想法过于简单）不ok
     let btnList = document.getElementsByClassName('btnList');
     let bannerPointer = btnList[0].getElementsByTagName('li');
    let btnLists = document.querySelectorAll('.btnList > li');
     for (let i = 0; i <bannerPointer.length ; i++){
         bannerPointer[i].onmouseenter = function() {
             this.style.background = 'blue';
             // console.log(i);
             index++;
             if(index == bannerImg.length){
                 index=0;
             }
             bannerImg.forEach(function (ele) {
                 ele.style.zIndex = 1;
             })
             bannerImg[index].style.zIndex = 999;

         }
         bannerPointer[i].onmouseleave = function () {
             this.style.background = '#fff';
         }
     }*/


    let first = document.querySelector('.first');
    let t = setInterval(rightBtn.onclick,1000);
  /*  //自动轮播使用setInterval（）方法ok*/
    // let btnList = document.getElementsByClassName('btnList');
    // let bannerPointer = btnList[0].getElementsByTagName('li');*!/
    // let first = document.querySelector('.first');
    // let t = setInterval(rightBtn.onclick,1000);
    first.onmouseenter = function () {
        clearInterval(t);
    }
    first.onmouseleave = function(){
        t = setInterval(rightBtn.onclick,1000);
    }

  /*  for (var i = 0 ; i < bannerPointer.length ; i++){
        bannerPointer[i].aaa = i;
        console.log(i);
        bannerPointer[i].onclick = function () {
            index = this.aaa;
            Array.prototype.forEach.call(bannerPointer,function(elem){
                elem.classList.remove('hot');
                // elem.style.background = '#fff'
            });
            bannerImg.forEach(function (ele) {
                ele.style.zIndex = 1;
            })
            this.classList.add('hot');
            // this.style.background = 'blue';
            bannerImg[this.aaa].style.zIndex = 999;
        }
    } */


  for(let i = 0 ; i < bannerPointer.length;i++){
      bannerPointer[i].onclick = function () {
          if(current ===i){
              return;
          }
          next=i;

          if(next>current){
              bannerImg[next].style.left =w +'px';
              animate(bannerImg[current],{left:-w});
              animate(bannerImg[next],{left:0});
          }else{
              bannerImg[next].style.left =-w +'px';
              animate(bannerImg[current],{left:w});
              animate(bannerImg[next],{left:0});
          }
          bannerPointer[current].classList.remove('hot');
          bannerPointer[next].classList.add('hot');


          current = next;
      }
  }



    let viewH = window.innerHeight;
    let imgs = document.querySelectorAll('.lazyLoad');
    let positionArr = [];
    imgs.forEach(function (ele) {
        // let parent = ele.offsetParent;
        // positionArr.push(parent.offsetTop + ele.offsetTop)
        positionArr.push(ele.offsetTop);

    })

    window.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop;
        for (let i = 0 ; i<positionArr.length;i++){
            if (scrolltop + viewH >=positionArr[i] + 50) {

                if (!imgs[i].src) {
                    console.log(i);
                    imgs[i].src = imgs[i].getAttribute('aa');
                }

            }
        }
    }
}
