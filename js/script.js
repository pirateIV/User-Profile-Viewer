document.body.style.fontFamily = 'Noto sans '
const users = [
    {
        name: 'Travis Smith', 
        age: 18,
        profession: 'Web Dev'
    },
    {
        name: 'JJ Thompson', 
        age: 14,
        profession: 'Intern JS Devloper'
    },
    {
        name: 'Smith Willis', 
        age: 27,
        profession: 'Web Dev'
    },
    {
        name: 'William Martin', 
        age: 40,
        profession: ' Web Dev Instructor'
    },
]
let currentUser = 0;

function displayUser(){
  const user = users[currentUser]

  usersDisplay.innerHTML = `
    <h1 style="font-weight: bold;">${user.name}</h1>
    <h2>${user.age}</h3>
    <h2>${user.profession}</h2>
  `
}

function prevUser(){
  currentUser--;
  if(currentUser < 0){
    currentUser = users.length - 1
  }

  displayUser()
}

function nextUser(){
  currentUser++;
  if(currentUser > users.length - 1){
    currentUser = 0
  }

  displayUser()
}
displayUser()