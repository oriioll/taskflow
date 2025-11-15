/*
TO DO:
Add li to ul with id taskList with the content in the input 
when button is clicked => button addEventListnerClick -> variable = input.text, create li with id smth with variable text

When task is clicked, variable active to true or false and depending on it, put text in green and underline



demo:
let inputText = ""
function createTask() {
    inputText = document.getElementWithID('taskInput').text //pick input text
    create li element with text=inputText
}

document.getElementWithId('addTaskBtn').addEventListener('Click' => {
    createTask()    
})
    

let li = id or class of li item

li.addEventListener('Click => {
    li.style.color(var green)
     li.style.decoration(underline)

    }')
*/

let inputText = "";
let newTask = "";

//function to create task based on input text
function createTask() {
  inputText = document.getElementById("taskInput").value;
  console.log(inputText);
  if (inputText.trim() !== "") {
    newTask = document.createElement("li");
    newTask.textContent = inputText;
    document.getElementById("taskList").appendChild(newTask);
    document.getElementById("taskInput").value = "";
  }
}

//function to style li element when its clicked
function completeTask(clickedElement) {
  let isCompleted = clickedElement.getAttribute("data-is-completed") === "true";
  if (!isCompleted) {
    //if task isn't completed, apply completed styles
    clickedElement.style.textDecoration = "line-through";
    clickedElement.style.color = "var(--accent-success)";
    clickedElement.style.opacity = "0.8";
    //task marked as completed
    clickedElement.setAttribute("data-is-completed", "true");
  } else {
    //if is completed, style and mark as uncompleted
    clickedElement.style.textDecoration = "none";
    clickedElement.style.color = "var(--text-primary)";
    clickedElement.style.opacity = "1";
    clickedElement.setAttribute("data-is-completed", "false");
}
}

//function to delete task
function deleteTask(clickedElement) {
    clickedElement.remove()
}

document.getElementById("addTaskBtn").addEventListener("click", () => {
  createTask();
});

//listens when a key is pressed inside the input and saves it into "event", then checks if that key (event.key) is the enter and if so, creates a task
document.getElementById("taskInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    createTask();
  }
});

//update style when task clicked
document.getElementById("taskList").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    completeTask(event.target);
  }
});

//delete task when double click
document.getElementById("taskList").addEventListener("dblclick", (event) => {
  if (event.target.tagName === "LI") {
    deleteTask(event.target);
  }
});
