$(document).ready(function () {
    $.ajax({
        url: "http://ldxscriptsdev.fw.landix.com.br/landix/user/",
        type: "get",
        xhrFields: {
            withCredentials: true
        },
        data: {
            //limit: 15
            extends(filtrosPadroes, filtrosEditaveis)
        }
    })
        .done(
        function (data) {
            AdicionarUsuarios(data.results);
        }
        )
        .fail(
        function (data) {
            alert(JSON.parse(data.responseText).detail);
        }
        )
});

function AdicionarUsuarios(results) {
    for (var pessoa of results) {
        var ativo = "<span class=\"label label-success\">Sim</span>";
        if (!pessoa.active)
            ativo = "<span class=\"label label-danger\">Não</span>";

        $("#tabelaUsuarios tbody").append(
            "<tr>" +
            "<td>" + pessoa.id + "</td>" +
            "<td>" + pessoa.name + "</td>" +
            "<td>" + pessoa.email + "</td>" +
            "<td>" + pessoa.ldap_uid + "</td>" +
            "<td>" + ativo + "</td>" +
            "</tr>"
        );
    }
};

var filtrosPadroes = {
    limit = 15
}

var filtrosEditaveis = {
    
}

function PopulaFiltros() {
    filtrosEditaveis = {

    }
};

function LimpaFiltros() {
    filtrosEditaveis = {
        
    }
};

function LimparTabela() {
    $("#tabelaUsuarios tbody tr").remove();
};

$('#filtrar').on({
    click: PopulaFiltros
});

$('#limpar').on({
    click: LimpaFiltros
});

