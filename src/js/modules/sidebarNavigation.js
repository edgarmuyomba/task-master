import { showWorkSpaces } from "./getWorkSpaces";
import { displayOverview } from "./displayOverview";
import { displayToday } from "./displayToday";
import { displayTomorrow } from "./displayTomorrow";
import { displayThisWeek } from "./displayThisWeek";
import { displayWorkSpace } from "./displayWorkspace";

showWorkSpaces();

const sideTiles = document.querySelectorAll(".sidebar .menu > .tile");

sideTiles.forEach((tile) => {
  let text = tile.querySelector(".side-tile");
  tile.addEventListener("click", () => {
    clearSelect();
    contentDisplay(text);
    addSelect(tile);
  });
});

const workSpaces = document.querySelectorAll(".workspaces > .tile");

workSpaces.forEach((space) => {
  let text = space.querySelector(".side-tile");
  space.addEventListener("click", () => {
    clearSelect();
    display_workSpace(text);
    addSelect(space);
  });
});

let tiles = {
  Overview: displayOverview,
  Today: displayToday,
  Tomorrow: displayTomorrow,
  "This Week": displayThisWeek,
};

function contentDisplay(text) {
  let title = text.textContent;
  let display = tiles[title];
  display();
}

function display_workSpace(text) {
  let title = text.textContent;
  displayWorkSpace(title);
}

function clearSelect() {
  sideTiles.forEach((tile) => tile.classList.remove("selected"));
  workSpaces.forEach((tile) => tile.classList.remove("selected"));
}

function addSelect(tile) {
  tile.classList.add("selected");
}
