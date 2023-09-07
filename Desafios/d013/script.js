function notas() {
    var res = document.querySelector('div#res')

    var aluno = prompt('Qual é o nome do aluno?')
    var n1 = Number(prompt(`Primeira nota de ${aluno}:`))
    var n2 = Number(prompt(`Segunda nota de ${aluno}:`))

    var media = (n1 + n2) / 2

    res.innerHTML = `<h2>Analisando a situação de ${aluno}<h2>`

    if (media < 3) {
        var situcao = `abaixo de ${media}, o aluno está <strong id="R">REPROVADO</strong>`
    } else if (media <= 6) {
        var situcao = 'entre 3,0 e 6,0, o aluno está em <strong id="r">RECUPERAÇÃO</strong>'
    } else {
        var situcao = `acima de ${media}, o aluno está <strong id="A">APROVADO</strong>`
    }

    var n1 = n1.toFixed(1).replace('.', ',')
    var n2 = n2.toFixed(1).replace('.', ',')
    var media = media.toFixed(1).replace('.', ',')

    res.innerHTML += `<p>Com as notas ${n1} e ${n2}, a <strong>média é ${media}</strong></p>`
    res.innerHTML += `<p>Com média ${situcao}</p>`
}