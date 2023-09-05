function converter() {
    var res = document.getElementById('res')
    var C = Number(prompt('Digite uma temperatura em °C (Celsius)'))

    var K = (C + 273.15).toFixed(2).replace('.', ',')
    var F = ((C * 9/5) + 32).toFixed(2).replace('.', ',')

    var C = C.toFixed(1).replace('.', ',')

    res.innerHTML = `<p><strong>A temperatura de ${C}°C, corresponde a...</strong></p>`
    res.innerHTML += `<p>${K}°K (Kelvin)<p>`
    res.innerHTML += `<p>${F}°F (Fahrenheit)</p>`
}