/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 Código JQuery
 */
jQuery(function ($) {
    $("#txtCpf").mask("999.999.999.99");
    $("#txtFone").mask("(99)9999-9999");

});

function redimensionaIframe(id) {
    if (obj = parent.document.getElementById(id)) {
        obj.height = document.body.scrollHeight + 10;
    }
}


/*função inútil*/
function validarMensagem() {
    
    var nome = document.getElementById('txtNome').value;
    var msgm = document.getElementById('txtMensagem').value;

    if (nome === " ") {
        alert("Informe seu nome!");
        //return alert()
    } else if (msgm==" "){
        alert("Escreva uma mensagem!");
    }
    else{
        return true;
    }
    /*if (email == "") {
        alert("Informe seu email!");
        return false;
    } 
    if (cpf == "") {
        alert("Informe a CPF!");
        return false;
    } */
        
}