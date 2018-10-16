$(document).ready(function () {
    $.ajax({
        url: "http://ldxscriptsdev.fw.landix.com.br/landixscripts/branches/",
        type: "get",
        dataType: "JSON",
        xhrFields: {
            withCredentials: true
        },
        data: {
            limit: 15,
            offset : 15
        }
    })
        .done(
        function (data) {
            console.log(data.results)
            AdicionarBracos(data.results);
        }
        )
        .fail(
        function (data) {
            console.log('FAIL')
            console.log(data)
            alert(JSON.parse(data.responseText).detail);
        }
        )
});

function AdicionarBracos(results) {
    var acoes = "<button id=\"editar\" type=\"button\" class=\"btn btn-default btn-sm\" data-toggle=\"tooltip\" " +
                "  data-placement=\"left\" title=\"Filtrar\">" +
                "    <span class=\"glyphicon glyphicon-edit\"></span>" +
                "</button>" +
                "<button id=\"deletar\" type=\"button\" class=\"btn btn-default btn-sm\" data-toggle=\"tooltip\" " +
                "  data-placement=\"left\" title=\"Limpar\">" +
                "    <span class=\"glyphicon glyphicon-trash\"></span>" +
                "</button>";

    for (var braco of results) {
        var mergeRealizado = "<span class=\"label label-success\">Sim</span>";
        if (!braco.merge_executed)
            mergeRealizado = "<span class=\"label label-danger\">Não</span>";

        $("#tabelaBracos tbody").append(
            "<tr>" +
            "<td>" + braco.id + "</td>" +
            "<td>" + braco.description + "</td>" +
            "<td>" + braco.type + "</td>" +
            "<td>" + braco.product + "</td>" +
            "<td>" + braco.responsible + "</td>" +
            "<td>" + braco.parent_branch + "</td>" +
            "<td>" + new Date(braco.created_date).toLocaleDateString()+ "</td>" +
            "<td>" + mergeRealizado + "</td>" +
            "<td>" + acoes + "</td>" +
            "</tr>"
        );
    }
};

function LimparTabela() {
    $("#tabelaBracos tbody tr").remove();
};

$('#filtrar').on({
    click: AdicionarBracos
});

$('#limpar').on({
    click: LimparTabela
});

$('#editar').on({
    click: AdicionarBracos
});

function DeletarRegistro() {
    console.log('DeletarRegistro()');
    var apagar = confirm('Deseja realmente deletar esse braço?');
    if (apagar) {
        console.log('SIM');
        this.remove();
    } else {
        console.log('NÃO');
        event.preventDefault();
    }
};

$('#deletar').on({
    click: DeletarRegistro
});