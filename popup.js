const form = document.querySelector('#form');

const handlesubmit = (e) => {
  e.preventDefault();
  // Get the form data
  const data = new FormData(e.target);
  // Convert the data to an object
  const obj = Object.fromEntries(data.entries());
   // Convert the object to JSON
  const list = JSON.stringify(obj);
  console.log(list);
}

form.addEventListener('submit', handlesubmit);

