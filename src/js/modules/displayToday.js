function displayToday() {
    const content = document.querySelector('.main > .content');
    content.innerHTML = `
                        <div class="header">Today</div>
                        `;
}

export { displayToday }; 