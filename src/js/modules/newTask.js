import { format } from "date-fns";

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

    // save the task
    console.log('saving the task. heh');
}

function hideNewTask() {
    newTaskCont.style.display = 'none';
}

export { displayNewTask };