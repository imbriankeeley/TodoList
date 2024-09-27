
export class AddProject {

    static id = 0;
    static projects = [];

    constructor(title) {
        this.id = ++AddProject.id;
        this.title = title;
        this.tasks = [];
        this.taskId = 0;

        AddProject.projects.push(this);
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.title;
    }

    getTaskId() {
        ++this.taskId;
        return this.taskId;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    static printAll() {
        console.log('All projects:');

        AddProject.projects.forEach(project => {
            if (project.id != null) {
                console.log(`Project ${project.id}:`, project);
            }
        });
    }

    remove() {
        for (let prop in this) {
            if (this.hasOwnProperty(prop)) {
                this[prop] = null;
            }
        }
    }
};














// import { addProjectForm } from "./dom";

// const projectButton = document.getElementById('projectButtonDiv');

// // Opens form to set new project title and adds the project while
// // creating a blank task section to work from
// export function addProject() {
//     while(projectButton.firstChild)
//     projectButton.removeChild(projectButton.firstChild);

//     if (projectButton) {
//         addProjectForm();
//     }
// }

// export function selectProject() {
    
// }