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


function handleForm(event) {
    event.preventDefault();

    // save the task
    console.log('saving the task. heh');
}

function hideNewTask() {
    newTaskCont.style.display = 'none';
}
export { displayNewTask };