const taskStorageArray = [];
const taskStorageObject = {};
const typeTask = document.querySelector("#typeTask");
const addTaskButton = document.querySelector("#addTaskButton");
const taskList = document.querySelector(".taskContainer ul");

function addTask(){
    if(typeTask.value === ""){
        alert("You have to type in a task");
    } 
    else{
        const taskValue = typeTask.value;
        taskStorageArray.push(taskValue);
        // Test om array fungerar
        console.log(taskStorageArray); 

        //Create task
        let li = document.createElement("li");
        li.textContent = typeTask.value;
        li.classList.add("newTask");
        taskList.appendChild(li);
        typeTask.value = "";
        
        //Line through
        li.addEventListener("click", function(){
            li.classList.toggle("completed");
        });        

        // Create Delete button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.textContent = "X";
        li.appendChild(deleteButton);
        
        //Delete task
        deleteButton.addEventListener("click", function(){
            li.remove();
        });        
    }
}