var btn = document.querySelector('.btn');
var input = document.querySelector('.input-import');
var ul = document.querySelector('.todos');



btn.addEventListener('click',function(){


    // tạo phần tử li
    var node = document.createElement('li');

    // ađd clas cho phần tử li
    node.classList.add('todos-item')
    // thêm text cho phàn tử li
    node.innerHTML =(input.value);

    // add li vừa tạo cho ul
    ul.appendChild(node);
    // reset input
    input.value = '';
    // khai báo ds li mới
     li = document.querySelectorAll('.todos-item')
    // thêm sự kiện cho từn li trong ds trên
    for(let item of li){
        item.addEventListener('click',function(){
            // xóa li được clcik khỏi ul
        item && ul.removeChild(item);
        })
    }
}) 

