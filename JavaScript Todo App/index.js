const message = document.querySelector(".message");
const tasksContainer = document.querySelector(".tasks");
const ulElement = tasksContainer.querySelector("ul");
let html = "";
let allTasks = [];


// localStorage.clear("tasks");

function updateMessage() {
  if (ulElement.children.length === 0) {
    message.innerHTML = "You are all caught up";
  } else {
    message.innerHTML = "";
  }
}

updateMessage();

function loadFromStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    allTasks = JSON.parse(storedTasks);
    renderTasks();
  }
}
function renderTasks() {
  ulElement.innerHTML = ""; // Clear existing tasks
  allTasks.forEach((task) => {
    const completedClass = task.completed ? "strike-through" : "";
    // const disabled = task.completed? "disabled":"";
    const disabled = task.completed ? "disabled" : "";

    const html = `
            <li data-id="${task.id}" >
                <input type="radio" class="complete-btn" ${
                  task.completed ? "checked" : ""
                } />
                <span class="content ${completedClass}">${task.task}</span>
                <div class="buttons">
                  <button class="edit-btn" ${disabled}><i class="fa-solid fa-pen-to-square"></i>Edit</button>
                    
                   <button class="delete-btn"><i class="fa-solid fa-trash"></i>Delete</button>
                </div>
            </li>`;
    ulElement.innerHTML += html;
  });
  updateMessage();
  // Attach event listeners after rendering tasks
  editTask();
  completeTask();
  removeTask();
}

loadFromStorage();

const taskBtn = document.querySelector(".add-btn");
taskBtn.addEventListener("click", function () {
  let newTaskInput = document.getElementById("addTaskInput");
  const newTask = newTaskInput.value;

  console.log(newTask);
  if (!newTask) return;

  addTask(newTask);
  newTaskInput.value = "";
  console.log(newTaskInput.value);
});

function addTask(task) {
  taskId = new Date().getTime();
  allTasks.push({ id: taskId, task: task, completed: false });
  html = ` <li data-id =${taskId}>
          <input type="radio" class="complete-btn"  />
                    <span class="content">${task}</span>
                    <div class="buttons">

                    <button class = "edit-btn" ><i class="fa-solid fa-pen-to-square"></i>Edit</button>
                    <button class="delete-btn"><i class="fa-solid fa-trash"></i>Delete</button>

                </div>

                </li>`;
  ulElement.innerHTML += html;
  localStorage.setItem("tasks", JSON.stringify(allTasks));
  renderTasks();
  editTask();
  completeTask();
  removeTask();
  updateMessage();
}

function editTask() {
  editBtn = document.querySelectorAll(".edit-btn");
  editBtn.forEach((element) => {
    element.addEventListener("click", function (event) {
      const liElement = event.target.closest("li");
      const taskId = liElement.getAttribute("data-id");

      const taskIdIndex = allTasks.findIndex(
        (task) => task.id.toString() === taskId
      );

      if (taskIdIndex !== -1) {
        console.log(allTasks[taskIdIndex]);
        console.log(allTasks[taskIdIndex].task);

        const currentTask = allTasks[taskIdIndex].task;
        const newTask = prompt("Edit Task:", currentTask);
        if (newTask !== null && newTask !== "" && newTask !== currentTask) {
          allTasks[taskIdIndex].task = newTask;

          const contentElement = liElement.querySelector(".content");
          contentElement.textContent = newTask;

          localStorage.setItem("tasks", JSON.stringify(allTasks));
        }
      }
    });
  });
}

function removeTask() {
  deleteBtn = document.querySelectorAll(".delete-btn");
  deleteBtn.forEach((element) => {
    element.addEventListener("click", function (e) {
      const liElement = this.closest("li");
      console.log(this);

      const taskId = liElement.getAttribute("data-id");
      liElement.remove();
      deleteTask(taskId);
      updateMessage();
    });
  });
}

function deleteTask(id) {
  const taskIdIndex = allTasks.findIndex((task) => task.id.toString() === id);
  if (taskIdIndex !== -1) {
    allTasks.splice(taskIdIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(allTasks));
  }
}

function completeTask() {
  completeBtn = document.querySelectorAll(".complete-btn");
  completeBtn.forEach((element) => {
    element.addEventListener("click", function (e) {
      const liElement = event.target.closest("li");
      console.log(liElement);
      const contentSpan = liElement.querySelector(".content");

      contentSpan.classList.add("strike-through");

      const taskId = liElement.getAttribute("data-id");
      const taskIndex = allTasks.findIndex(
        (task) => task.id.toString() === taskId
      );
      if (taskIndex !== -1) {
        allTasks[taskIndex].completed = this.checked;
        localStorage.setItem("tasks", JSON.stringify(allTasks));
      }
    });
  });
}
