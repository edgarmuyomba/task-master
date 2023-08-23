import { fetchWorkSpaces, saveTask } from "./taskStorage";

const taskDetailCont = document.querySelector('.taskDetailContainer');

const close = document.querySelector('.taskDetailTab .close');
close.addEventListener('click', hideTaskDetail);

function hideTaskDetail() {
    taskDetailCont.style.display = 'none';
}

(function populateWorkSpaces() {
    const options = fetchWorkSpaces();
    let selectEm = taskDetailCont.querySelector('select.workspaces');
    for (let option of options) {
        selectEm.innerHTML += `
                                    <option value="${option}">${option}</option>
                                `;
    }
})();

function populateDetails(task) {
    let title = taskDetailCont.querySelector('input.title');
    let body = taskDetailCont.querySelector('input.body');
    let workspace = taskDetailCont.querySelector('select.workspaces');
    let date = taskDetailCont.querySelector('input.date');
    let time = taskDetailCont.querySelector('input.time');
    let status = taskDetailCont.querySelector('select.status');

    title.value = task.title;
    workspace.value = task.workspace;
    date.value = task.date;
    time.value = task.time;
    status.value = task.status.code;
}

function displayDetails() {
    taskDetailCont.style.display = '';
}

export { populateDetails, displayDetails };