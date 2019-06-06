window.addEventListener('load' , function(){
    let tab = document.querySelectorAll('.tab >li');
    let prev = 0 ;
    let content = document.querySelector('.content');
    let type = 'all';
    let doList = [
        {
            id : 1 , content : '不想上课' , ctime : '2019/6/4' , status : false
        },
        {
            id : 2 , content : '想要放假啊' , ctime : '2019/6/4' , status : false
        },
        {
            id : 3 , content : '休息一下  就一下下' , ctime : '2019/6/4' , status : true
        },
        {
            id : 4 , content : '想吃好吃滴' , ctime : '2019/6/4' , status : false
        },
        {
            id : 5 , content : '想速速回家' , ctime : '2019/6/5' , status : false
        },
        {
            id : 6 , content : '不考试就更好了' , ctime : '2019/6/5' , status : false
        },
    ];

    let str = localStorage.getItem('doList');
    if(!str){
        saveData();
        str = localStorage.getItem('doList');
    }
    doList = JSON.parse(str);

    //三种状态的编写
    tab.forEach(function (ele , index) {
        ele.onclick = function () {
            // for (let i = 0; i < tab.length; i++) {
                tab[prev].classList.remove('hot');
                this.classList.add('hot');
                prev = index;
            // }

            type = this.getAttribute('type');


            render(filterDate(type));

        }

    })

    tab[0].onclick();



    //内容的修改状态和删除
    content.onclick = function(e){
        let target = e.target;
        let id = target.parentNode.id;
        if(target.nodeName ==='INPUT'){

        //    获取id
            let elearr = doList.filter(ele => ele.id == id)[0];
            elearr.status = target.checked;

        }else if (target.nodeName ==='DEL') {
            let index = doList.findIndex(ele =>ele.id == id);
            doList.splice(index,1);

        }

        render(filterDate(type));
        saveData();
    }


    //添加代办事项
    let forms = document.forms[0];
    let textBtn = forms.elements[0];
    let submitBtn = forms.elements[1];
    submitBtn.onclick = function (e) {
        e.preventDefault();
        let obj = creatObj();
        doList.push(obj);
        forms.reset();
        render(filterDate(type));
        saveData();
    }



    function saveData() {
        localStorage.setItem('doList' , JSON.stringify(doList));
    }



    function creatObj() {
        let id = doList[doList.length-1].id + 1;
        let content = textBtn.value;
        let ctime = new Date().toLocaleDateString();
        let status = false;
        return {id,content,ctime,status};
    }








    function  filterDate(type) {
        let arr = [];
        switch (type) {
            case 'all':
                arr = doList;
                break;
            case 'done':
                arr = doList.filter(function (ele) {
                    return ele.status;
                });
                break;
            case 'doing':
                arr = doList.filter(function (ele) {
                    return !ele.status;
                });
                break;
        }

        //注： 返回的是通过筛选后的数组  而并非render（）后渲染的数组。
        return arr;

    }


  /*  let checkboxs = document.querySelectorAll('checkbox');
    checkboxs.forEach(ele=>{
        ele.onclick = function () {
            let id = this.parentNode.id;
            let arr = doList.filter(eles=>eles.id==id)[0];
            console.log(arr);
            // arr.status = true;
        }
    })*/


    //渲染函数
    render(doList);

    function render(arr) {
        let html = '';
        arr.forEach(function(ele){
            if(ele.status){
                html += ` 
                        <li id="${ele.id}">
                            <input type="checkbox" checked>
                             <p>${ele.content}</p> 
                             <del>X</del>
                             <time>${ele.ctime}</time>
                        </li>
                         `
            }else{
                html += `
                        <li id="${ele.id}">
                            <input type="checkbox"> 
                            <p>${ele.content}</p> 
                            <del>X</del>
                            <time>${ele.ctime}</time>
                        </li> 
                  `
            }
     });

        content.innerHTML = html;

    }




})