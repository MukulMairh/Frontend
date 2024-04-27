/**Get the elements created in the documents */
let addTaskBtn = document.getElementById("addTask");
let taskList = document.getElementById("taskList");
let input = document.getElementById("input");

let allTaskList = [];//This will store all the task lists

function updateTask(index) {
    let updatedItem = prompt("Enter the updated item:");
    if (updatedItem !== null && updatedItem.trim() !== "") {
        taskList[index] = updatedItem.trim();
        ToggleTask();
    }
}
let addTask = function () {

    //Create a li tag to enter a row 
    let taskText = input.value.trim();
    if (taskText != "") {
        let li = document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", ToggleTask);

        //Create a edit button
        let updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";
        updateBtn.style = "margin:5px; color:red; "
        updateBtn.addEventListener("click", updateTask(index));
        li.append(updateBtn);

        //Create a button to remove the element
        let closeBtn = document.createElement("button");
        closeBtn.textContent = "X";
        closeBtn.style = "margin:5px; color:red; "
        closeBtn.addEventListener("click", removeTask);
        li.appendChild(closeBtn);

        taskList.appendChild(li);
        //Empty the value of input element
        input.value = ""
    }
}

addTaskBtn.addEventListener("click", addTask());
input.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        // addTask();
    }
});

function ToggleTask() {
    alert("Called")
    this.taskList.toggle("Completed");
}
function removeTask(event) {
    event.stopPropagation();
    this.parentNode.remove();
}
