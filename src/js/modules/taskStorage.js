let workspaces = document.querySelector(".sidebar > .workspaces");

function fetchWorkSpaces() {
  let savedSpaces = JSON.parse(localStorage.getItem("workspaces"));
  if (savedSpaces) {
    return savedSpaces;
  } else {
    localStorage.setItem("workspaces", JSON.stringify([]));
    return [];
  }
}

function saveWorkSpace(name) {
  let savedSpaces = JSON.parse(localStorage.getItem("workspaces"));
  savedSpaces.push(name);
  localStorage.setItem("workspaces", JSON.stringify(savedSpaces));

  location.reload();
}

function fetchTasks() {
  let savedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (savedTasks) {
    return savedTasks;
  } else {
    localStorage.setItem("tasks", JSON.stringify([]));
    return [];
  }
}

function saveTask(task) {
  let savedTasks = JSON.parse(localStorage.getItem("tasks"));
  savedTasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(savedTasks));

  location.reload();
}

export { fetchWorkSpaces, saveWorkSpace, saveTask, fetchTasks };
