<script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous">
</script>
<!-- HTMLモデル -->
<!--<input type="button" name="test" onclick="expandHtml();" value="click!"> デバッグ用-->
<div id="modalview"></div>

<script>
"use strict";

var fsw = fsw || {};
fsw.openform = fsw.openform || {};
fsw.openform.glvars = fsw.openform.glvars || {};

$(document).ready(function(){
    //取りたい内部列名を設定
    //新しいNewFormに引き継ぐ値を変数に設定しておくことで、自動的にアイテムをコピーできる
    fsw.openform.glvars.title = $('#Title').parent ().parent ().children (1).find("input").val();
    fsw.openform.glvars.Select = $('#Select').parent ().parent ().children (1).find ("select").val ();
});

// preSaveItem時に呼び出されるフォームの保存処理時にモーダルウィンドウを展開
function PreSaveAction (){
    if(true){
        fsw.openform.expandHtml();
        return true;
    }else{
        return false
    }
}

// 表示されているモーダルウィンドウを閉じる
fsw.openform.modalClose = function (){
    let btn = document.getElementById('btn');
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// 子ウィンドウのdocumentを読み込むまで待つための処理
fsw.openform.waitForLoading = function (targetWindow) {
  return new Promise((resolve, reject) => {
    targetWindow.addEventListener("load", resolve);
  });
}

// 子ウィンドウを展開する処理
fsw.openform.openWindow = async function(target){
    if(target == "test"){
        let url='https://テナント名/sites/ClassicTest/Lists/test/NewForm.aspx'; //環境に合わせて変更
        const childWindow1 = open(url, "_blank");
        await fsw.openform.waitForLoading(childWindow1);
    }
}

// モーダルウィンドウ内のHTML
fsw.openform.expandHtml = function (){
    // modal HTML
    let xhtml = 
    '<div id="modal" class="modal">'+
        '<div class="modal-content">'+
            '<div class="modal-body">'+
                '<center>'+
                    '<br /><h3>別のリストを開きますか？</h3>'+
                    '<p>'+
                        '<input type="button" name="test" value="テストリストを開く" id="label1" Onclick=fsw.openform.openWindow("test");return true;>'+
                    '</p>'+
                    '<p>'+
                        '<input type="button" value="保存して閉じる" style="margin: 1px" onclick="fsw.openform.modalClose(); return true;">'+
                    '</p>'+
                    '<br/>'+
                '</center>'+
            '</div>'+
        '</div>'+
    '</div>'
    document.getElementById('modalview').innerHTML = xhtml;
}

// モーダルウィンドウのグレーアウト部分をクリックすると閉じる
window.addEventListener('click', function(e) {
  if (e.target == modal) {modal.style.display = 'none';
  }
});

</script>

<!-- modal style sheet-->
<style>
.modal {
    display: block;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: rgba(0,0,0,0.5);
}
.modal-content{
    border-radius: 10px;
    background-color: #f5ffff;
    width: 500px;
    margin: 20% auto;
}
#closeBtn {
    position: relative;;
}
label, input[type='checkbox'] {
    cursor: pointer;
}
</style>

