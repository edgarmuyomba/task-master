import { fetchTasks } from "./taskStorage";
import { format } from "date-fns";
import { displayDetails, populateDetails } from "./taskDetail";

const content = document.querySelector('.main > .content');

function displayToday() {
    setContent();
    setHeader();
    displayTasks();
    clickTasks();
}

function setContent() {
    content.innerHTML = '';
    content.classList = 'content';
    content.classList.add('Today');
}

function setHeader() {
    let header = document.querySelector('.main > .header > .title');
    header.textContent = 'Today';
}

function displayTasks() {
    let tasks = fetchTasks();
    for (let task of tasks) {
        if (isToday(task)) {
            content.innerHTML += `
                                <div class="today-task">
                                    <div class="title">${task.title}</div>
                                    <div class="workspace">${task.workspace}</div>
                                    <div class="status ${task.status.code}">${task.status.title}</div>
                                    <div class="id" style="display: none">${task.id}</div>
                                </div>
                            `;
        }
    }
}

function isToday(task) {
    let today = format(Date.now(), 'yyyy-MM-dd');
    let date = task.date;
    if (date === today) return true;
    return false;
}

function clickTasks() {
    let currTasks = content.querySelectorAll('.content.Today > .today-task');
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

export { displayToday }; 