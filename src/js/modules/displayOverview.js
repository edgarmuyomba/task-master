import { tasks, workspaces } from "./taskStorage";

const content = document.querySelector('.main > .content');

function displayOverview() {
    content.innerHTML = '';
    createWorkSpaces();
    // do nothing
};

function createWorkSpaces() {
    for (let space of workspaces) {
        let workspace = document.createElement('div');
        workspace.classList.add('workspace');
        createDivs(workspace, space);
        addTasks(workspace, space);
        content.appendChild(workspace);
    }
}

function createDivs(workspace, space) {
    let header = document.createElement('div');
    header.classList.add('heading');

    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = space;

    header.appendChild(title);
    workspace.appendChild(header);

    let tasks = document.createElement('div');
    tasks.classList.add('tasks');
    workspace.appendChild(tasks);
}

function addTasks(workspace, space) {
    let tasksDiv = workspace.querySelector('.tasks');
    for (let task of tasks) {
        if (task.workspace === space) {
            tasksDiv.innerHTML += `
                                    <div class="task">
                                        <div class="due">Today</div>
                                        <div class="title">${task.title}</div>
                                        <div class="time">9:00 AM - 9:30 AM</div>
                                    </div>
                                `;
        }
    }
}

displayOverview();

export { displayOverview };