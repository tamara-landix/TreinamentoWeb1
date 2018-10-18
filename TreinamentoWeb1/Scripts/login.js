
function validacaousername() {
    if (!($('#username')[0].checkValidity())) {
        // Seta o campo, seu pai e seus irmãos de vermelho, informando o erro na validação
        $('#username').parent().addClass("has-error");
        $('#username').siblings().addClass("erro");
        $('#username').siblings('.error-message')[0].innerHTML = $('#username')[0].validationMessage;
    } else {
        // Seta o campo, seu pai e seus irmãos para as configurações padrões
        $('#username').parent().removeClass("has-error");
        $('#username').siblings().removeClass("erro");
        $('#username').siblings('.error-message').removeClass("has-error");
        $('#username').siblings('.error-message')[0].innerHTML = "";
    }
};

function validacaopassword() {
    if (!($('#password')[0].checkValidity())) {
        // Seta o campo, seu pai e seus irmãos de vermelho, informando o erro na validação
        $('#password').parent().addClass("has-error");
        $('#password').siblings().addClass("erro");
        $('#password').siblings('.error-message').addClass("has-error");
        $('#password').siblings('.error-message')[0].innerHTML = $('#password')[0].validationMessage;
    } else {
        // Seta o campo, seu pai e seus irmãos para as configurações padrões
        $('#password').parent().removeClass("has-error");
        $('#password').siblings().removeClass("erro");
        $('#password').siblings('.error-message').removeClass("has-error");
        $('#password').siblings('.error-message')[0].innerHTML = "";
    }
};

function exibeAlerta() {
    // Exibe o alerta
    $('#alerta').show();

    // Fecha o alerta depois de 3 segundos
    setTimeout(function () { $('#alerta').hide() }, 3000);
};

$('#username').on({
    blur: validacaousername,
    keyup: validacaousername,
    submit: validacaousername
});

$('#password').on({
    blur: validacaopassword,
    keyup: validacaopassword,
    submit: validacaopassword
});

//$('#entrar').on({
//    click: function (event) {
//        event.preventDefault(); // impede que o evento padrão ocorra (ex.: seguir um link);

//        if ((!($('#username')[0].checkValidity())) || (!($('#password')[0].checkValidity()))) {
//            exibeAlerta
//        }
//        else {
//            // AJAX

//            $.ajax({
//                url: "http://ldxscriptsdev.fw.landix.com.br/landix/login/",
//                type: "post",
//                data: {
//                    username: $('#username').val(),
//                    password: $('#password').val()
//                }
//            })
//                .done(
//                    function(data) {
//                        localStorage.setItem("dados", JSON.stringify(data))
//                        window.location.href = 'pages/home.html'
//                    }
//                )
//                .fail(
//                    function(data) {
//                        $('#alerta').html(JSON.parse(data.responseText).detail)
//                        exibeAlerta()
//                    }
//                )
//        }
//    }
//});

// jq

// put/post: se id === 'string'
// contentType:'application/json'