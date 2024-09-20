const taskStorageArray = [];
const typeTask = document.querySelector("#typeTask");
const addTaskButton = document.querySelector("#addTaskButton");
const taskList = document.querySelector(".taskContainer ul");
const remainingTasks = document.querySelector("#remainingTasks");
const finishedTasks = document.querySelector("#finishedTasks");

let taskId = 0;
let completedTaskCount = 0;

addTaskButton.addEventListener("click", addTask);

function addTask() {
    if (typeTask.value === "") {
        alert("You have to type in a task");
        return;
    }

    const taskValue = typeTask.value;
    const newTask = { id: taskId++, text: taskValue, completed: false };

    // Create task element
    const li = document.createElement("li");
    li.textContent = newTask.text;
    li.classList.add("newTask");
    taskList.appendChild(li);

    // Handle task completion
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        newTask.completed = !newTask.completed;

        // Update completed task count
        if (newTask.completed) {
            completedTaskCount++;
        } else {
            completedTaskCount--;
        }
        updateTaskCounts();
    });

    // Create and add delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "X";
    li.appendChild(deleteButton);

    // Handle task deletion
    deleteButton.addEventListener("click", function () {
        li.remove();
        taskStorageArray.splice(taskStorageArray.indexOf(newTask), 1);
        if (newTask.completed) {
            completedTaskCount--;
        }
        updateTaskCounts();
    });

    // Add task to array and update counts
    taskStorageArray.push(newTask);
    typeTask.value = "";
    updateTaskCounts();
}

//Posts/displays the tasks complete or not completed
function updateTaskCounts() {
    remainingTasks.textContent = `Remaining: ${taskStorageArray.length - completedTaskCount}`;
    finishedTasks.textContent = `Finished: ${completedTaskCount}`;
}
