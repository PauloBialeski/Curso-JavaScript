function verificar() {
    var res = document.getElementById('res')

    var panterior = Number(prompt('Qual era o preço anterior do produto?'))
    var patual = Number(prompt('Qual é o preço atual do produto?'))

    
    if (panterior < patual) {
        var diferenca = patual - panterior
        var porcentagem = (diferenca / panterior) * 100
        var porcentagem = porcentagem.toFixed(0)
        var porcentagemf = `${porcentagem}% pra cima`
        var hoje = 'Hoje o produto está mais caro.'
        var alt = 'subiu'
    } else {
        var diferenca = panterior - patual
        var porcentagem = (diferenca / panterior) * 100
        var porcentagem = porcentagem.toFixed(0)
        var porcentagemf = `${porcentagem}% pra baixo`
        var hoje = 'Hoje o produto está mais barato.'
        var alt = 'caiu'
    }

    var panterior = panterior.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    var patual = patual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    var diferenca = diferenca.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    res.innerHTML = '<h2>Analisando os valores informados'
    res.innerHTML += `<p>O produto custava ${panterior} e agora custa ${patual}.</p>`
    res.innerHTML += `<p>${hoje}</p>`
    res.innerHTML += `<p>O preço ${alt} ${diferenca} em relação ao preço anterior.</p>`
    res.innerHTML += `<p>Uma variação de ${porcentagemf}.</p>`

}