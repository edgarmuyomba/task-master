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

let workspaces = [
    "Personal",
    "Design"
];

let indices = [0, 1, 2, 3, 4, 5, 6, 7];

const tasks = [];

for (let index of indices) {
    let space = Math.floor(Math.random() * 2);
    tasks.push({
        title: titles[index],
        body: bodies[index],
        workspace: workspaces[space]
    });
}

export { tasks, workspaces };