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

        projects.forEach(p => {
            const reAddProject = new AddProject(p.title);
            reAddProject.tasks = p.tasks;
            reAddProject.taskId = p.taskId;
        })
        AddProject.projects.forEach(project => {
                dom.reloadProject(project.title);
        });
        dom.loadFirstProject();

        AddProject.printAll();
    }

}