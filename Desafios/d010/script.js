function calcular() {
    var res = document.getElementById('res')

    var a = Number(prompt('Qual é o valor de a?'))
    var b = Number(prompt('Qual é o valor de b?'))
    var c = Number(prompt('Qual é o valor de c?'))

    var delta = b ** 2 - 4 * a * c

    res.innerHTML = '<p><strong>Resolvendo Bhaskara</strong></p>'
    res.innerHTML += `<p>A equação atual é <strong id="e">${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong id="e">&Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong>`
    res.innerHTML += `<p>O valor calculado foi <strong id="del">&Delta; = ${delta}</strong></p>`
}