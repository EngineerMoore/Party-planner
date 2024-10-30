// loop through each event and place keys in <td> w/in tr.innerhtml
  // grab the table
const table = document.querySelector(`table`)
eventData = []
// Get event data from the API
const fetchData = async () => {
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ft/events`);
  console.log(response);
  let data = await response.json();
  // console.log(data);
  // console.log(typeof data);
  // console.log(Object.keys(data));
  data = Object.values(data);
  eventData = data[2];
  console.log(eventData);
  eventNames = eventData.map((event) => {
    return event.name;
  })
  // console.log(eventNames);
  eventLocations = eventData.map((event) => {
    return event.location;
  })
// console.log(eventLocations)
  eventDates = eventData.map((event) => {
    return event.date;
  })
  // console.log(eventDates)
  eventData.forEach((event) => {
    const tr = document.createElement(`tr`);
    tr.innerHTML = `
      <td>${event.date}</td>
      <td>${event.name}</td>
      <td>${event.location}</td>
     <td>${event.description}</td>
    `;
    table.append(tr)
  })
  console.log(data)
}

fetchData()

// Place an event listener on the submit button
  // Grab the submit button
const submitForm = document.querySelector(`form`)
// console.log(submitForm)
  // prevent refresh

// Post to the API
  // fetch w/ 


submitForm.addEventListener(`submit`, async (event) => {
event.preventDefault();
console.log(`good`);
// const fetchPost = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ft/events`,
// {
//   method: `POST`,
//   body: JSON.stringify
//   ({
//     "id":``,
//     "name": "architectural design fundamental deep dive",
//     "description": "Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti scelerisque per condimentum adipiscing interdum eu.",
//     "date": "42/14/15",
//     "location": "2112 Edna Dr.",
//     "cohortId":``,
//   }),
//   headers: {
//     "content-type": "application/json",
//   },
// })
//   .then(response) => response.json()
//   .then(json) => console.log(json);
})