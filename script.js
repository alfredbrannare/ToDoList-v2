const taskStorage = [];
const typeTask = document.querySelector("#typeTask");
const addTaskButton = document.querySelector("#addTaskButton");
const newTask = document.querySelector(".newTask");

function addTask(){
    if(typeTask.value === ""){
        alert("You have to type in a task");
    } 
    else{
        const taskValue = typeTask.value;
        taskStorage.push(taskValue);
        console.log(taskStorage);

        let li = document.createElement("li");
        li.textContent = typeTask.value;
        newTask.appendChild(li);
        typeTask.value = ""; 
    }
    
}