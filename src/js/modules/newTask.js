import { format } from "date-fns";
import { fetchWorkSpaces, saveTask } from "./taskStorage";

const newTask = document.querySelector('.main > .aside > .newTask');
const newTaskCont = document.querySelector('.newTaskContainer');

newTask.addEventListener('click', () => newTaskCont.style.display = '');

function displayNewTask(choice) {
    newTaskCont.style.display = ''
    // picking the selected
    const dropDown = newTaskCont.querySelector('select');
    dropDown.value = choice;
}

const close = newTaskCont.querySelector('.close');
close.addEventListener('click', hideNewTask);

const TaskForm = newTaskCont.querySelector('form');
TaskForm.addEventListener('submit', handleForm);

const minimumDate = format(Date.now(), 'yyyy-MM-dd');

let date = TaskForm.querySelector('.due > .date');
date.setAttribute('min', minimumDate);
date.setAttribute('value', minimumDate);

function handleForm(event) {
    event.preventDefault();
    
    let workspace = TaskForm.querySelector('select').value;
    let title = TaskForm.querySelector('input.title').value;
    let date = TaskForm.querySelector('.due > .date').value;
    let time = TaskForm.querySelector('.due > .time').value;

    saveTask({
        status: {
            code: "not-started",
            title: "Not Started"
        },
        workspace: workspace,
        title: title,
        date: date,
        time: time,
    });

    hideNewTask();
    clearFields();
}

function hideNewTask() {
    newTaskCont.style.display = 'none';
}

function clearFields() {
    TaskForm.querySelector('select').value = '';
    TaskForm.querySelector('input.title').value = '';
    TaskForm.querySelector('.due > .date').value = '';
    TaskForm.querySelector('.due > .time').value = '';
}

(function populateWorkSpaces() {
    const options = fetchWorkSpaces();
    let selectEm = TaskForm.querySelector('select');
    for (let option of options) {
        selectEm.innerHTML += `
                                    <option value="${option}">${option}</option>
                                `;
    }
})();

export { displayNewTask };