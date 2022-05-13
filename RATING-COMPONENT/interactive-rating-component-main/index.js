const card = document.getElementById("card")
const thanks_card = document.getElementById("thanks_card")
const selection = document.querySelectorAll(".selection")
const puntuacion = document.getElementById("puntuacion")

const send = () =>{
    thanks_card.classList.add('active')
    card.classList.add('active')
}

const buttonValue = function (evento) {
	console.log("Valor de boton es: ", this.innerText);
    puntuacion.innerText=this.innerText
}
selection.forEach(boton => {
	boton.addEventListener("click", buttonValue);
});