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

 function checkSelecionado(check) {
 /*   if (check.checked) {
        document.getElementById("captcha").style.visibility="visible";   
    }
    else {  
        objeto.getElementById("captcha").style.visibility= "hidden";   
    }  */
    //var display = document.getElementById("captcha").style.display;
    if (check.checked) 
        document.getElementById("captcha").style.display = "block";
    else
        document.getElementById("captcha").style.display = "none";      
}

function redimensionaIframe(id) {
    if (obj = parent.document.getElementById(id)) {
        obj.height = document.body.scrollHeight + 10;
    }
}


function validarMensagem() {
    var check = document.getElementById("check").checked;
    //var msgm = document.getElementById("txtMensagem").value;
    var retorno = false;    
        if (!check) {
            alert("Por favor, informe que você não é um robô!");
        }else if (document.getElementById("txtCaptcha").value != "F62PB"){
            alert("Código de verificação incorreto!");
        }/*else if (!(msgm != "")){
            alert("Por favor, escreva-nos uma mensagem!");            
        }*/else{
            alert("Mensagem enviada com sucesso!");
            retorno= true;
        }
        return retorno;
}

    /*
    var check = document.getElementById('check').checked;
 
        if (document.getElementById('check').checked) {
        alert("Clicou!");
        //return alert()
    } else {
        alert("Nao marssscou");
    }*/
    /*if (email == "") {
        alert("Informe seu email!");
        return false;
    } 
    if (cpf == "") {
        alert("Informe a CPF!");
        return false;
    } */
        
