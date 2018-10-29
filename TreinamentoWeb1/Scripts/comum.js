$(document).ready(function () {
    $('#nomeUsuarioLogado')[0].innerHTML = JSON.parse(localStorage.getItem("dados")).name;
});

function solicitaLogout(){
    $.ajax({
        url: "http://ldxscriptsdev.fw.landix.com.br/landix/logout/",
        dataType: "json",
        type: "post",
        xhrFields: {
            withCredentials: true
        }
    })
        .done(
            function(data) {
                console.log('Requisição realizada com sucesso!')
                console.log(data)
            }
        )
        .fail(
            function(data) {
                console.log('Falha na requisição =/')
                console.log(data)
            }
        )
  };

$('#logout').on({
    click: solicitaLogout
});

function abrirHome() {
    window.location.href = 'home.html'
};

function abrirUsers() {
    window.location.href = 'users.html'
};

function abrirBranches() {
    window.location.href = 'branches.html'
};

$('#logoTab').on({
    click: abrirHome
});

$('#usuariosTab').on({
    click: abrirUsers
});

$('#bracosTab').on({
    click: abrirBranches
});