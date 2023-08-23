import { fetchTasks } from "./taskStorage";
import { add, format } from "date-fns";
import { displayDetails, populateDetails } from "./taskDetail";

const content = document.querySelector('.main > .content');

function displayTomorrow() {
    setHeader();
    setContent();
    displayTasks();
    clickTasks();
};

function setHeader() {
    let header = document.querySelector('.main > .header > .title');
    header.textContent = 'Tomorrow';
}

function setContent() {
    content.innerHTML = '';
    content.classList = 'content';
    content.classList.add('Tomorrow');
}

function displayTasks() {
    let tasks = fetchTasks();
    for (let task of tasks) {
        if (isTomorrow(task)) {
            content.innerHTML += `
                                <div class="tomorrow-task">
                                    <div class="title">${task.title}</div>
                                    <div class="workspace">${task.workspace}</div>
                                    <div class="status ${task.status.code}">${task.status.title}</div>
                                    <div class="id" style="display: none">${task.id}</div>
                                </div>
                            `;
        }
    }
}

function isTomorrow(task) {
    let tomorrow = format(add(Date.now(), { days: 1 }), 'yyyy-MM-dd');
    let date = task.date;
    if (tomorrow === date) return true;
    return false;
}

function clickTasks() {
    let currTasks = content.querySelectorAll('.content.Tomorrow > .tomorrow-task');
    currTasks.forEach((task) => {
        task.addEventListener('click', () => {
            let id = parseInt(task.querySelector('.id').textContent);
            let taskDet = getTask(id);
            displayDetails();
            populateDetails(taskDet);
        }); 
    });
}

function getTask(id) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let task of tasks) {
        if (task.id === id) return task;
    }
}

export { displayTomorrow };