document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const tasks = document.querySelector('#tasks')

  const createTaskForm = document.querySelector('#create-task-form');
  createTaskForm.addEventListener('submit', function (event) {
     //stop form from POSTING
    event.preventDefault();  

    const newTasks = event.target.querySelector('#new-task-description')
    const userSubmit = newTasks.value 


    const tasksPTag = document.createElement('li')
    tasksPTag.textContent = userSubmit

    tasks.appendChild(tasksPTag)

    // console.log(event.target) //form
  })
})