import { AddProject } from "./projectObject";
import { Dom } from "./domObject";
import { dom } from "./interfaceObject";

export class Storage {

    static update() {
        const projects = JSON.stringify(AddProject.projects);
        localStorage.setItem("Projects", projects)
    }

    static lookup() {
        const projects = JSON.parse(localStorage.getItem("Projects"));
        if (!(projects.find(project => project.title === "General Tasks"))) {
            AddProject.deleteProject("General Tasks");
        }
        projects.forEach(project => {
            if (project !== (projects.find(project => project.title === "General Tasks"))) {
                AddProject.projects.push(project);
                dom.reloadProject(project.title)
            }
            
        });
    }

}