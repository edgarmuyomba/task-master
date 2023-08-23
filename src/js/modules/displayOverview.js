import { fetchTasks, fetchWorkSpaces } from "./taskStorage";
import { displayNewTask } from "./newTask";
import { displayDetails, populateDetails } from "./taskDetail";

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
    let workspaces = fetchWorkSpaces();
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
    let tasks = fetchTasks();
    for (let task of tasks) {
        let currTasks = tasksDiv.querySelectorAll('.task');
        if (currTasks.length < 3) {
            if (task.workspace === space) {
                tasksDiv.innerHTML += `
                                        <div class="task ${task.status.code}">
                                            <div class="due">${task.date}</div>
                                            <div class="title">${task.title}</div>
                                            <div class="time">${task.time}</div>
                                            <div class="id" style="display: none">${task.id}</div>
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

displayOverview();

export { displayOverview };