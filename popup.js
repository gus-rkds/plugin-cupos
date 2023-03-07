// ----------- Crear Lista ----------------

const listaMaterias = []

const getList = () => {
  console.log(listaMaterias)
  return listaMaterias
}

const pintarLista = () => {
  let list = getList(), tbody = document.querySelector('#table tbody')

  tbody.innerHTML = ''

  for(let i=0 ; i < list.length; i++) {
    let row = tbody.insertRow(i)
    let materiaCell = row.insertCell(0)
    let profesorCell = row.insertCell(1)

    materiaCell.innerHTML = list[i].materia
    profesorCell.innerHTML = list[i].profesor

    tbody.appendChild(row)
  }
}

pintarLista()

const createList = (materia, profesor) => {
  const newMateria = {
    materia,
    profesor
  }
  listaMaterias.push(newMateria)
}

// ----------- HANDLESUBMIT ----------------

const handleSubmit = document.querySelector('#form').addEventListener('submit', e => {
  e.preventDefault()
  // Get the form data
  const data = new FormData(e.target)
  // Convert the data to an object
  const obj = Object.fromEntries(data.entries());
  // create list
  createList(obj.materia, obj.profesor)
  pintarLista();
})

// export default listaMaterias;