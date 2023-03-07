// ----------- Script ----------------

//import listaMaterias from "./popup.js"
//console.log(listaMaterias)

const seccionesSeleccionar = {
"HUMANIDADES I": "B", 
"MATEMATICA III": "A", 
"DEONTOLOGIA PROFESIONAL": "A", 
"FISICA II": "B",
"PROGRAMACION I": "B" }

btnsSucess = document.querySelectorAll('a.btn.hidden-print.btn-success.btn-xs')
btnsSucess.forEach(function(button){
	const materiaBoton = button.getAttribute("data-original-title")
	const seccionBoton = button.textContent
	const seccionSeleccionar = seccionesSeleccionar[materiaBoton]

	if(seccionBoton.includes(seccionSeleccionar) ){
		button.click()
	}
})
