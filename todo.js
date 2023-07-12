var taskId = 0;
function addTask() {
    taskId++;
    const taskInput = document.getElementById("input-field");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");
        const taskItem = createTaskItem(taskId, taskText);
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function createTaskItem(id, text) {
  const li = document.createElement("li");
  li.id = "task-" + id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function() {
    handleTaskCompletion(id);
  });
  li.appendChild(checkbox);

  const taskText = document.createElement("span");
  taskText.innerText = text;
  li.appendChild(taskText);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function() {
    deleteTask(id);
  });
  li.appendChild(deleteButton);

  return li;
}

function handleTaskCompletion(id) {
  const task = document.getElementById("task-" + id);
  const completedList = document.getElementById("completed-list");

  if (task.querySelector("input[type=checkbox]").checked) {
    task.classList.add("completed");
    completedList.appendChild(task);
  } else {
    task.classList.remove("completed");
    const taskList = document.getElementById("task-list");
    taskList.appendChild(task);
  }
}

function deleteTask(id) {
  const task = document.getElementById("task-" + id);
  task.remove();
}
