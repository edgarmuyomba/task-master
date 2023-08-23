let titles = [
    "This is task 1",
    "This is task 2",
    "This is task 3",
    "This is task 4",
    "This is task 5",
    "This is task 6",
    "This is task 7",
];

let bodies = [
    "This is body 1",
    "This is body 2",
    "This is body 3",
    "This is body 4",
    "This is body 5",
    "This is body 6",
    "This is body 7",
];

let workspaces = [];

let status = [
    {
        code: 'not-started',
        title: 'Not Started'
    },
    {
        code: 'in-progress',
        title: 'In Progress'
    },
    {
        code: 'complete',
        title: 'Complete'
    }
];

let indices = [0, 1, 2, 3, 4, 5, 6];

const tasks = [];

for (let index of indices) {
    let space = Math.floor(Math.random() * 2);
    let state = Math.floor(Math.random() * 3);
    tasks.push({
        title: titles[index],
        body: bodies[index],
        workspace: workspaces[space],
        status: status[state]
    });
}

window.onload = () => {
    workspaces = fetchWorkSpaces();
}

function fetchWorkSpaces() {
    let savedSpaces = localStorage.getItem('workspaces');
    if (savedSpaces) {
        return savedSpaces;
    }
    else {
     localStorage.setItem('workspaces', JSON.stringify([]));
     return [];
    }
        
}

function saveWorkSpace(name) {
    let savedSpaces = JSON.parse(localStorage.getItem('workspaces'));
    savedSpaces.push(name);
    localStorage.setItem('workspaces', JSON.stringify(savedSpaces));
    workspaces.concat(savedSpaces);
}

console.log(workspaces);
export { tasks, workspaces, saveWorkSpace };