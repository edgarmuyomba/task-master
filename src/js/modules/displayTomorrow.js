import { tasks } from "./taskStorage";

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
    for (let task of tasks) {
        content.innerHTML += `
                                <div class="tomorrow-task">
                                    <div class="title">${task.title}</div>
                                    <div class="workspace">${task.workspace}</div>
                                    <div class="status ${task.status.code}">${task.status.title}</div>
                                </div>
                            `;
    }
}

export { displayTomorrow };