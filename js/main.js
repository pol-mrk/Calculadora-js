function calcular() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var operacion = document.getElementById("operacion").value

    if (operacion == "sumar") {
        var resultado = Number(valor1) + Number(valor2)
    } else if (operacion == "restar") {
        var resultado = Number(valor1) - Number(valor2)
    } else if (operacion == "multiplicar") {
        var resultado = Number(valor1) * Number(valor2)
    } else {
        var resultado = Number(valor1) / Number(valor2)
    }

    var parrafo = document.getElementById("resultado")
    parrafo.innerHTML = "El resultado es " + resultado
}