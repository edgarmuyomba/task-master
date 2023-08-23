import { fetchTasks } from "./taskStorage";
import { add, format } from "date-fns";

const content = document.querySelector('.main > .content');

function displayTomorrow() {
    setHeader();
    setContent();
    displayTasks();
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

export { displayTomorrow };