function calcular() {
    let res = document.getElementById('res')

    let produto = prompt('Qual é o produto que você está comprando?')
    var preco = Number(prompt(`Qual o preço de ${produto}?`))

    var desconto = (preco * 10) / 100
    var valorf = preco - desconto

    var preco = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    var desconto = desconto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    var valorf = valorf.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    res.innerHTML = `<p><strong>Calculando desconto de 10% para ${produto}</strong></p>`
    res.innerHTML += `<p>O preço original era ${preco}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar ${desconto} de desconto (-10%).</p>`
    res.innerHTML += `<p>No fim, você vai pagar ${valorf} no produto ${produto}.</p>`
}