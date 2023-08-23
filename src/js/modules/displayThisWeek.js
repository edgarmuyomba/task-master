import { fetchTasks } from "./taskStorage";

const content = document.querySelector('.main > .content');

function displayThisWeek() {
    setHeader();
    setContent();
    displayTasks();
};

function setHeader() {
    let header = document.querySelector('.main > .header > .title');
    header.textContent = 'This Week';
}

function setContent() {
    content.innerHTML = '';
    content.classList = 'content';
    content.classList.add('Week');
}

function displayTasks() {
    let tasks = fetchTasks();
    for (let task of tasks) {
        content.innerHTML += `
                                <div class="week-task">
                                    <div class="title">${task.title}</div>
                                    <div class="workspace">${task.workspace}</div>
                                    <div class="status ${task.status.code}">${task.status.title}</div>
                                </div>
                            `;
    }
}

export { displayThisWeek };