var cotacao = prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')

function converter() {
    var res = document.getElementById('res')

    var carteira = Number(prompt('Quantos R$ você tem na carteira?'))
    var dolar = carteira / cotacao

    var carteira = carteira.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    var dolar = dolar.toLocaleString('pt-br',{style: 'currency', currency: 'USD'});

    res.innerHTML = `<p><strong>Com ${carteira} você consegue comprar ${dolar}.`
}