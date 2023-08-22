import { tasks } from "./taskStorage";

const content = document.querySelector('.main > .content');

function displayPersonal() {
    setHeader();
    setContent();
    displayTasks();
};

function setHeader() {
    let header = document.querySelector('.main > .header > .title');
    header.textContent = 'Personal';
}

function setContent() {
    content.innerHTML = '';
    content.classList = 'content';
    content.classList.add('Workspace');
}

// stopped here
function displayTasks() {
    for (let task of tasks) {
        content.innerHTML += `
                                <div class="workspace-task">
                                    <div class="title">${task.title}</div>
                                    <div class="workspace">${task.workspace}</div>
                                    <div class="status ${task.status.code}">${task.status.title}</div>
                                </div>
                            `;
    }
}

export { displayPersonal };