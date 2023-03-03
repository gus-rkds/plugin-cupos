const form = document.querySelector('#form');

const handlesubmit = (e) => {
  e.preventDefault();
  // Get the form data
  const data = new FormData(e.target);
  // Convert the data to an object
  const obj = Object.fromEntries(data.entries());
   // Convert the object to JSON
  const json = JSON.stringify(obj);
  console.log(json);
}

form.addEventListener('submit', handlesubmit);