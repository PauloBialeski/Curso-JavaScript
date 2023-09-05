function reajustar() {
    var res = document.getElementById('res')

    var nome = prompt('Qual é o nome do funcionário?')
    var salario = Number(prompt(`Qual é o salário de ${nome}?`))
    var porcentagem = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))

    var aumento = (salario * porcentagem) / 100
    var ganhar = salario + aumento
    
    var salario = salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    var aumento = aumento.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    var ganhar = ganhar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    res.innerHTML = `<p><strong>${nome} recebeu um aumento salarial!</strong></p>`
    res.innerHTML += `<p>O salário atual era ${salario}.</p>`
    res.innerHTML += `<p>Com um aumento de ${porcentagem}%, o salário vai aumentar ${aumento} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${ganhar}.`
}