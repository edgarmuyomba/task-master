import { fetchTasks } from "./taskStorage";
import { displayDetails, populateDetails } from "./taskDetail";

const content = document.querySelector(".main > .content");

function displayWorkSpace(title) {
  setHeader(title);
  setContent();
  displayTasks(title);
  clickTasks();
}

function setHeader(title) {
  let header = document.querySelector(".main > .header > .title");
  header.textContent = title;
}

function setContent() {
  content.innerHTML = "";
  content.classList = "content";
  content.classList.add("Workspace");
}

function displayTasks(title) {
  let tasks = fetchTasks();
  for (let task of tasks) {
    if (task.workspace === title) {
      content.innerHTML += `
                                    <div class="workspace-task">
                                        <div class="title">${task.title}</div>
                                        <div class="due">${task.date} - ${task.time}</div>
                                        <div class="status ${task.status.code}">${task.status.title}</div>
                                        <div class="id" style="display: none">${task.id}</div>
                                    </div>
                                `;
    }
  }
}

function clickTasks() {
  let currTasks = content.querySelectorAll(
    ".content.Workspace > .workspace-task",
  );
  currTasks.forEach((task) => {
    task.addEventListener("click", () => {
      let id = parseInt(task.querySelector(".id").textContent);
      let taskDet = getTask(id);
      displayDetails();
      populateDetails(taskDet);
    });
  });
}

function getTask(id) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  for (let task of tasks) {
    if (task.id === id) return task;
  }
}

export { displayWorkSpace };
