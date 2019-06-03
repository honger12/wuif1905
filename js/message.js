window.addEventListener('load' , function () {
    let thumb = document.querySelectorAll('img[id]');
    console.log(thumb);

//    添加选择头像事件
    let prevThumb = 0;
    for (let i = 0 ; i < thumb.length ; i++){
        thumb[i].onclick = function () {
            //感觉存在一些问题
            this.style.opacity = '1';
            thumb[prevThumb].style.opacity = '0.7';
            prevThumb = i ;

        }
    }


//    留言文本框上加入提示内容：提示已输入的字符数
    let value;
    let spans = document.querySelector('#liu');
    let textarea = document.querySelector('textarea');
    textarea.onkeyup = function () {
        value = this.value;
        spans.innerText = value.length;
    }

//    获取姓名的表单
    let value2;
    let name = document.querySelector('input[type=text]');
    name.onkeyup = function(){
        value2 = this.value;
        // console.log(value2);
    }

//    提交按钮
    let submit = document.querySelector('input[type=submit]');
    let message = document.querySelector('#message');
    submit.onclick = function (e) {
        e.preventDefault();
        let imgs = thumb[prevThumb].src;
        let html = `
    <div class="relax">
        <div class="photo">
            <img src="${imgs}" alt="">
        </div>
        <div class="look_web">
            <p>${value2}</p>
            <p>${value}</p>
        </div>
        <p>${new Date()}</p>
        <br>
    </div>     
   `
        // html.classList.add('relax');
        message.innerHTML = html + message.innerHTML;
    }
})