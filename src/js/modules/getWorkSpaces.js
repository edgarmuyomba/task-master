import { fetchWorkSpaces } from "./taskStorage";

const workSpaces = document.querySelector(".workspaces");

function showWorkSpaces() {
  let workspaces = fetchWorkSpaces();
  for (let space of workspaces) {
    workSpaces.innerHTML += `
                                <div class="tile">
                                    <div class="side-tile workspace">${space}</div>
                                </div> 
                            `;
  }
}

export { showWorkSpaces };
