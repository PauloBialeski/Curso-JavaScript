function converter() {
    var resp = document.getElementById('resp')
    var res = document.getElementById('res')
    var m = Number(prompt('Digite uma distancia em metros (m)'))
    var Km = (m / 1000).toFixed(3).replace('.', ',')
    var Hm = (m /100).toFixed(3).replace('.', ',')
    var Dam = (m / 10).toFixed(3).replace('.', ',')
    var dm = (m * 10).toFixed(1).replace('.', ',')
    var cm = m * 100
    var mm = m * 1000
    var m = m.toFixed(2).replace('.', ',')

    resp.innerHTML = `<strong>A distância de ${m} metros, corresponde a...</strong>`
    res.innerHTML = `${Km} quilômetros (Km)<br><br>`
    res.innerHTML += `${Hm} hectômetros (Hm)<br><br>`
    res.innerHTML += `${Dam} decâmetros (Dam)<br><br>`
    res.innerHTML += `${dm} decímetros (dm)<br><br>`
    res.innerHTML += `${cm.toLocaleString()} centímetros (cm)<br><br>`
    res.innerHTML += `${mm.toLocaleString()} milímetros (mm)<br><br>`
}
