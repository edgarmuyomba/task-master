import { fetchWorkSpaces, saveTask } from "./taskStorage";

const taskDetailCont = document.querySelector(".taskDetailContainer");

const close = document.querySelector(".taskDetailTab .close");
close.addEventListener("click", hideTaskDetail);

function hideTaskDetail() {
  taskDetailCont.style.display = "none";
}

(function populateWorkSpaces() {
  const options = fetchWorkSpaces();
  let selectEm = taskDetailCont.querySelector("select.workspaces");
  for (let option of options) {
    selectEm.innerHTML += `
                                    <option value="${option}">${option}</option>
                                `;
  }
})();

function populateDetails(task) {
  let title = taskDetailCont.querySelector("input.title");
  let body = taskDetailCont.querySelector("input.body");
  let workspace = taskDetailCont.querySelector("select.workspaces");
  let date = taskDetailCont.querySelector("input.date");
  let time = taskDetailCont.querySelector("input.time");
  let status = taskDetailCont.querySelector("select.status");
  let id = taskDetailCont.querySelector("div.id");

  title.value = task.title;
  body.value = task.body;
  workspace.value = task.workspace;
  date.value = task.date;
  time.value = task.time;
  status.value = task.status.code;
  id.textContent = task.id;
}

function displayDetails() {
  taskDetailCont.style.display = "";
}

const detailForm = taskDetailCont.querySelector("form");

detailForm.addEventListener("submit", handleUpdates);

function handleUpdates(event) {
  event.preventDefault();

  let workspace = detailForm.querySelector("select.workspaces").value;
  let title = detailForm.querySelector("input.title").value;
  let date = detailForm.querySelector(".due > .date").value;
  let time = detailForm.querySelector(".due > .time").value;
  let statusT = detailForm.querySelector("select.status").value;
  console.log(statusT);
  let body = detailForm.querySelector("input.body").value;
  let id = parseInt(detailForm.querySelector("div.id").textContent);

  let status = getStatus(statusT);

  updateTask(id, {
    workspace,
    title,
    date,
    time,
    status,
    body,
  });

  hideTaskDetail();
}

function getStatus(name) {
  let code = null,
    title = null;
  if (name === "not-started") {
    code = "not-started";
    title = "Not Started";
  } else if (name === "in-progress") {
    code = "in-progress";
    title = "In Progress";
  } else {
    code = "complete";
    title = "Completed";
  }

  return {
    code,
    title,
  };
}

function updateTask(id, updates) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  for (let task of tasks) {
    if (task.id === id) {
      let index = tasks.indexOf(task);
      console.log(index);
      tasks.splice(index, 1);
    }
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  saveTask({
    id: id,
    status: updates.status,
    workspace: updates.workspace,
    title: updates.title,
    date: updates.date,
    time: updates.time,
    body: updates.body,
  });
}

export { populateDetails, displayDetails };
