function verificar() {
    var res = document.getElementById('res')

    var panterior = Number(prompt('Qual era o preço anterior do produto?'))
    var patual = Number(prompt('Qual é o preço atual do produto?'))

    //res.innerHTML = '<h2>Analisando os valores informados'
    //res.innerHTML += `<p>O produto custava ${panterior} e agora custa ${patual}.</p>`

    if (panterior < patual) {
        var diferenca = patual - panterior
        var porcentagem = (diferenca * panterior) / 100
    }
}