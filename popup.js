// ----------- Crear Lista ----------------

let listaMaterias = []

const createList = (materia, seccion) => {
  const newMateria = {
    materia: materia,
    seccion: seccion
  }
  console.log(newMateria)
  listaMaterias.push(newMateria)
}

// ----------- HANDLESUBMIT ----------------

const handleSubmit = document.querySelector('#form').addEventListener('submit', e => {
  e.preventDefault();
  // Get the form data
  const data = new FormData(e.target);
  // Convert the data to an object
  const obj = Object.fromEntries(data.entries());
   // Convert the object to JSON
  console.log(obj.materia);
  console.log(obj.seccion);
  createList(obj.materia, obj.seccion)
})

