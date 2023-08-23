import { format } from "date-fns";
import { fetchWorkSpaces, saveTask } from "./taskStorage";

const newTask = document.querySelector('.main > .aside > .newTask');
const newTaskCont = document.querySelector('.newTaskContainer');

newTask.addEventListener('click', () => newTaskCont.style.display = '');

function displayNewTask(choice) {
    newTaskCont.style.display = ''
    // picking the selected
    const dropDown = newTaskCont.querySelector('.newTaskTab select');
    dropDown.value = choice;
}

const close = newTaskCont.querySelector('.newTaskTab .close');
close.addEventListener('click', hideNewTask);

const TaskForm = newTaskCont.querySelector('.newTaskTab form');
TaskForm.addEventListener('submit', handleForm);

const minimumDate = format(Date.now(), 'yyyy-MM-dd');

let date = TaskForm.querySelector('.newTaskTab .due > .date');
date.setAttribute('min', minimumDate);
date.setAttribute('value', minimumDate);

function handleForm(event) {
    event.preventDefault();
    
    let workspace = TaskForm.querySelector('.newTaskTab select').value;
    let title = TaskForm.querySelector('.newTaskTab input.title').value;
    let date = TaskForm.querySelector('.newTaskTab .due > .date').value;
    let time = TaskForm.querySelector('.newTaskTab .due > .time').value;

    saveTask({
        id: Math.floor(Math.random() * 100000),
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
    TaskForm.querySelector('.newTaskTab select').value = '';
    TaskForm.querySelector('.newTaskTab input.title').value = '';
    TaskForm.querySelector('.newTaskTab .due > .date').value = '';
    TaskForm.querySelector('.newTaskTab .due > .time').value = '';
}

(function populateWorkSpaces() {
    const options = fetchWorkSpaces();
    let selectEm = TaskForm.querySelector('.newTaskTab select');
    for (let option of options) {
        selectEm.innerHTML += `
                                    <option value="${option}">${option}</option>
                                `;
    }
})();

export { displayNewTask };