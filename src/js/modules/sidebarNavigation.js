import { displayOverview } from "./displayOverview";
import { displayToday } from "./displayToday";
import { displayTomorrow } from "./displayTomorrow";
import { displayThisWeek } from "./displayThisWeek";
import { displayPersonal } from "./displayPersonal";
import { displayDesign } from "./displayDesign";


const sideTiles = document.querySelectorAll('.sidebar .tile');

sideTiles.forEach((tile) => {
    let text = tile.querySelector('.side-tile');
    text.addEventListener('click', () => {
        clearSelect();
        contentDisplay(text);
        addSelect(tile);
    });
})

let tiles = {
    'Overview': displayOverview,
    'Today': displayToday,
    'Tomorrow': displayTomorrow,
    'This Week': displayThisWeek,
    'Personal': displayPersonal,
    'Design': displayDesign,
}

function contentDisplay(text) {
    let title = text.textContent;
    let display = tiles[title];
    display();
}

function clearSelect() {
    sideTiles.forEach((tile) => tile.classList.remove('selected'));
}

function addSelect(tile) {
    tile.classList.add('selected');
}