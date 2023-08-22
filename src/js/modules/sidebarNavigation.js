import { displayOverview } from "./displayOverview";
import { displayToday } from "./displayToday";
import { displayTomorrow } from "./displayTomorrow";
import { displayThisWeek } from "./displayThisWeek";
import { displayPersonal } from "./displayPersonal";
import { displayDesign } from "./displayDesign";


const sideTiles = document.querySelectorAll('.sidebar .side-tile');

sideTiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        let title = tile.textContent;
        contentDisplay(title);
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

function contentDisplay(title) {
    let display = tiles[title];
    display();
}