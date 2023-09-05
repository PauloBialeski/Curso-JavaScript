function converter() {
    var resp = document.getElementById('resp')
    var res = document.getElementById('res')
    var mt = prompt('Digite uma distancia em metros (m)')
    var mt = Number(mt)
    var Km = mt / 1000
    var Hm = Km * 10
    var Dam = Hm * 10
    var dm = Dam * 100
    var cm = dm * 10
    var mm = cm / 10

    resp.innerHTML = `<strong>A distância de ${mt} metros, corresponde a...</strong>`
    res.innerHTML = `${Km} quilômetros (Km)<br><br>`
    res.innerHTML += `${Hm} hectômetros (Hm)<br><br>`
    res.innerHTML += `${Dam} decâmetros (Dam)<br><br>`
    res.innerHTML += `${dm} decímetros (dm)<br><br>`
    res.innerHTML += `${cm} centímetros (cm)<br><br>`
    res.innerHTML += `${mm} milímetros (mm)<br><br>`
}