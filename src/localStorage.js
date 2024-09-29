import { AddProject } from "./projectObject";
import { Dom } from "./domObject";
import { dom } from "./interfaceObject";

export class Storage {

    static update() {
        const projects = JSON.stringify(AddProject.projects);
        localStorage.setItem("Projects", projects)
    }

    static lookup() {
        // const projects = AddProject.projects;
        // localStorage.setItem("Projects", projects)
        const projects = JSON.parse(localStorage.getItem("Projects"));
        if (!(projects.find(project => project.title === "General Tasks"))) {
            const general = document.getElementById('General Tasks');
            general.remove();
        }

        projects.forEach(p => {
            const reAddProject = new AddProject(p.title);
            reAddProject.tasks = p.tasks;
            reAddProject.taskId = p.taskId;
        })
        AddProject.projects.forEach(project => {
            if (project !== (AddProject.projects.find(project => project.title === "General Tasks"))) {
                dom.reloadProject(project.title);
            }
        });
        dom.loadFirstProject();

        AddProject.printAll();
    }

}