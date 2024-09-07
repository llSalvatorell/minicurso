
function calcular(event) {
    event.preventDefault();

    let alcoolInpunt = document.getElementById("alcool").value;
    let gasolinaInpunt = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result")

    let gasolinaSpan = document.getElementById("gasolina-result")
    let alcoolSpan = document.getElementById("alcool-result")

    let calculo = (alcoolInpunt / gasolinaInpunt)
    
    if (calculo < 0.7){
        textResult.innerHTML = "Compensa usar Álcool"
    }else {
        textResult.innerHTML = "Compensa usar Gasolina"
    }

    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInpunt;
    alcoolSpan.innerHTML = "Álcool R$ " + alcoolInpunt;

    contentResult.classList.remove("hide")


}