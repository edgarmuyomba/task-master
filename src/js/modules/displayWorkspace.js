import { tasks } from "./taskStorage";

const content = document.querySelector('.main > .content');

function displayWorkSpace(title) {
    setHeader(title);
    setContent();
    displayTasks(title);
}

function setHeader(title) {
    let header = document.querySelector('.main > .header > .title');
    header.textContent = title;
}

function setContent() {
    content.innerHTML = '';
    content.classList = 'content';
    content.classList.add('Workspace');
}

function displayTasks(title) {
    for (let task of tasks) {
        if (task.workspace === title) {
            content.innerHTML += `
                                <div class="workspace-task">
                                    <div class="title">${task.title}</div>
                                    <div class="status ${task.status.code}">${task.status.title}</div>
                                </div>
                            `;
        }
    }
}

export { displayWorkSpace };