import { addProjectForm } from "./dom";

const projectButton = document.getElementById('projectButtonDiv');


export function addProject() {
    while(projectButton.firstChild)
    projectButton.removeChild(projectButton.firstChild);

    if (projectButton) {
        addProjectForm();
    }
}

export function selectProject() {
    
}