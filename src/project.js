import { addProjectForm } from "./dom";

const projectButton = document.getElementById('projectButtonDiv');

// Opens form to set new project title and adds the project while
// creating a blank task section to work from
export function addProject() {
    while(projectButton.firstChild)
    projectButton.removeChild(projectButton.firstChild);

    if (projectButton) {
        addProjectForm();
    }
}

export function selectProject() {
    
}