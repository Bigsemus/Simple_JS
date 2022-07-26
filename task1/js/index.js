let tbody = document.querySelector('tbody');

function displayStudents(students){
for (let i = 0; i < students.length; i++){

tbody.innerHTML += `<tr>
<td>
${students[i].id}
</td>
<td>
<input type="text" placeholder="${students[i].name}">
<button class='${students[i].id}'>edit</button>
<button id='${students[i].id}'>delete</button>
</td>
</tr>`
}
}

  let tbody1 = document.querySelector('tbody');
  tbody1.addEventListener('mousedown', function(e) {
    e.target.addEventListener('mouseup', function(){
      if (e.target.className){
    fetch(`https://jsonplaceholder.typicode.com/users/${e.target.className}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        name: 'dddd'
      }),
      headers: {
        'Content-type': 'applications/json; charset=UTF-8'
      }
    })
    .then(response => response.json())
    .then(json => displayStudents(json))
  }
  })
  })


  let tbody2 = document.querySelector('tbody');
  tbody2.addEventListener('mousedown', function(e) {
    e.target.addEventListener('mouseup', function(){
      if (e.target.id){
          fetch(`https://jsonplaceholder.typicode.com/users/${e.target.id}`, {
  method: 'DELETE',
  body: JSON.stringify({
    id: 1
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
  .then((response) => response.json())
  .then((json) => displayStudents(json));
}
});
    })

let buttonLoad = document.querySelector('.load');
buttonLoad.addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(json => displayStudents(json))
})