import { tasks, workspaces } from "./taskStorage";
import { displayNewTask } from "./newTask";

const content = document.querySelector('.main > .content');

function displayOverview() {
    setContent();
    setHeader();
    createWorkSpaces();
    handleNewTasks();
    clickTasks();
};

function setHeader() {
    let header = document.querySelector('.main > .header > .title');
    header.textContent = 'Overview';
}

function setContent() {
    content.innerHTML = '';
    content.classList = 'content';
}

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
    workspace.innerHTML += `
                                <div class="heading">
                                    <div class="title">${space}</div>
                                    <div class="plus-box"></div>
                                </div>
                                <div class="tasks">
                                </div>
                            `;
}

function addTasks(workspace, space) {
    let tasksDiv = workspace.querySelector('.tasks');
    for (let task of tasks) {
        let currTasks = tasksDiv.querySelectorAll('.task');
        if (currTasks.length < 3) {
            if (task.workspace === space) {
                tasksDiv.innerHTML += `
                                    <div class="task ${task.status.code}">
                                        <div class="due">Today</div>
                                        <div class="title">${task.title}</div>
                                        <div class="time">9:00 AM - 9:30 AM</div>
                                    </div>
                                    `;
            }
        }
    }
}

function handleNewTasks() {
    let headings = content.querySelectorAll('.workspace > .heading');
    headings.forEach((heading) => {
        let title = heading.querySelector('.title').textContent;
        let newTask = heading.querySelector('.plus-box');
        newTask.addEventListener('click', () => {
            displayNewTask(title);
        });
    })
}

function clickTasks() {
    let currTasks = content.querySelectorAll('.content .tasks > .task');
    currTasks.forEach((task) => {
        task.addEventListener('click', () => {
            let title = task.querySelector('.title').textContent;
            console.log(title);
        }); 
    });
}

displayOverview();

export { displayOverview };