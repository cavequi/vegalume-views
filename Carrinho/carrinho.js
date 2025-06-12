function diminuirQtd() {
    var qtd = parseInt(document.getElementById("qtd").value);

    if (qtd > 1)
        qtd--;

    document.getElementById("qtd").value = qtd;
}

function aumentarQtd() {
    var qtd = parseInt(document.getElementById("qtd").value);

    if (qtd < 10)
        qtd++;

    document.getElementById("qtd").value = qtd;
}