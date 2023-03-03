const seccionesSeleccionar = {"HUMANIDADES I": "1MB", 
								"MATEMATICA III": "1MA", 
								"DEONTOLOGIA PROFESIONAL": "1MA", 
								"FISICA II": "1MB",
								"PROGRAMACION I": "1MB" }

btnsSucess = document.querySelectorAll('a.btn.hidden-print.btn-success.btn-xs')
btnsSucess.forEach(function(button){
	const materiaBoton = button.getAttribute("data-original-title")
	const seccionBoton = button.textContent
	const seccionSeleccionar = seccionesSeleccionar[materiaBoton]

	if(seccionBoton.includes(seccionSeleccionar) ){
		button.click()
	}
})

