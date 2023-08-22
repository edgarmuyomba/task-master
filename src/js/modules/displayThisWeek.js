function displayThisWeek() {
    const content = document.querySelector('.main > .content');
    content.innerHTML = `
                        <div class="header">This Week</div>
                        `;
};

export { displayThisWeek };