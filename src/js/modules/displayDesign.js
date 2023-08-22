const content = document.querySelector('.main > .content');

function displayDesign() {
    setHeader();
    setContent();
};

function setContent() {
    content.innerHTML = '';
    content.classList = 'content';
    content.classList.add('Design');
}

function setHeader() {
    let header = document.querySelector('.main > .header > .title');
    header.textContent = 'Design';
}

export { displayDesign };