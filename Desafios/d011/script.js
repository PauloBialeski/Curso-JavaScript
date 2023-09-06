function verificar() {
    var res = document.getElementById('res')

    var ano = Number(prompt('Qual é o ano que você quer verificar?'))

    res.innerHTML = `<p><strong id="a">Analisando o ano de ${ano}...</strong></p>`

    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        res.innerHTML += `<p>O ano de ${ano} <strong id="t"> É BISSEXTO</strong> \u{2705}</p>`
    } else {
        res.innerHTML += `<p>O ano de ${ano} <strong id="f"> NÃO É BISSEXTO</strong> \u{274C}</p>`
    }
}