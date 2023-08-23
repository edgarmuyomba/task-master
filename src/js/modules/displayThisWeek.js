import { fetchTasks } from "./taskStorage";
import { isThisWeek, format } from "date-fns";

const content = document.querySelector('.main > .content');

function displayThisWeek() {
    setHeader();
    setContent();
    displayTasks();
};

function setHeader() {
    let header = document.querySelector('.main > .header > .title');
    header.textContent = 'This Week';
}

function setContent() {
    content.innerHTML = '';
    content.classList = 'content';
    content.classList.add('Week');
}

function displayTasks() {
    let tasks = fetchTasks();
    for (let task of tasks) {
        if (thisWeek(task)) {
            content.innerHTML += `
                                    <div class="week-task">
                                        <div class="title">${task.title}</div>
                                        <div class="workspace">${task.workspace}</div>
                                        <div class="status ${task.status.code}">${task.status.title}</div>
                                    </div>
                                `;
        }
    }
}

function thisWeek(task) {
    let date = task.date;
    date = createDate(date);
    return isThisWeek(date);
}

function createDate(dateStr) {
    let dateList = dateStr.split('-');
    let year = parseInt(dateList[0]), month = parseInt(dateList[1]) - 1, day = parseInt(dateList[2]);
    let date = new Date(year, month, day);
    return date;
}

export { displayThisWeek };