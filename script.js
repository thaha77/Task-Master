function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;
    if (taskText === "") return;
    let ul = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = taskText;
    li.onclick = function() {
        this.remove();
    };
    ul.appendChild(li);
    input.value = "";
}