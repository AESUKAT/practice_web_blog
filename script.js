//headerの内容を取得
const headerElement = document.querySelector('header');

//clickイベントを追加
headerElement.addEventListener('click', function(){
    console.log("Header was clicked!");
    const body = document.body;

    //クリックされたら背景色を変更する、既に変わっていたらトグルで切り替える
    if (body.style.backgroundColor === 'rgb(230, 230, 250)'){
        body.style.backgroundColor = '';
    } else {
        body.style.backgroundColor = '#E6E6FA';
    }
});