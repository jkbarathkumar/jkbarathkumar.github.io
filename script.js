document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");
    const tasksList = document.getElementById("tasks-list");

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskText;
        li.appendChild(span);

        tasksList.appendChild(li);
        taskInput.value = "";
    });
});

//asdasd
