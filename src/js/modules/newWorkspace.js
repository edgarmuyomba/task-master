import { workspaces } from "./taskStorage";

const newSpaceButton = document.querySelector('.workspaces > .heading > .newSpace');
const noSpaceButton = document.querySelector('.workspaces > .heading > .noSpace');
let newForm = document.querySelector('.workspaces > .newSpaceForm');

newSpaceButton.addEventListener('click', () => {
    newForm.style.display = '';
    swapButtons();
})

function swapButtons() {
    if (newSpaceButton.style.display === 'none') {
        newSpaceButton.style.display = '';
        noSpaceButton.style.display = 'none';
    } else {
        newSpaceButton.style.display = 'none';
        noSpaceButton.style.display = '';
    }
}

noSpaceButton.addEventListener('click', () => {
    newForm.style.display = 'none';
    swapButtons();
})

newForm.addEventListener('submit', handleNewSpace);

function handleNewSpace(event) {
    event.preventDefault();

    let inp = newForm.querySelector('input');

    let workspace = inp.value;
    inp.value = '';

    workspaces = localStorage.getItem('workspaces');
    if (workspaces) {
        workspaces.push(workspace);
        localStorage.setItem('workspaces', JSON.stringify(workspaces));
    } else {
        localStorage.setItem('workspaces', JSON.stringify([workspace]));
    }
}