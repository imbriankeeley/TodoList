import { generalProject } from "./interfaceObject";
import { DateFormat } from "./dateFormat"
import { dom } from "./interfaceObject"
import { Storage } from "./localStorage";
const format = new DateFormat();
export const storage = new Storage();


export class AddProject {

    static id = 0;
    static projects = [];

    constructor(title) {
        this.id = ++AddProject.id;
        this.title = title;
        this.tasks = [];
        this.taskId = 0;

        AddProject.projects.push(this);
        console.log(this);

        Storage.update();
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
        Storage.update();
    }

    static deleteProject(title) {
        const project = AddProject.projects.find(p => p.title === title);

        if (project) {
            const projectIndex = AddProject.projects.findIndex(p => p.title === title);
            if (projectIndex !== -1) {
                AddProject.projects.splice(projectIndex, 1);
                dom.removeProject(title);
                Storage.update();
                console.log(`Project ${title} removed`);
            } else {
                console.log(`Project ${title} not found`);
            }
        } else {
            console.log(`Project ${title} not found`);
        }


    }

    static appendTasks(title) {
        const project = AddProject.projects.find(p => p.title === title);

        dom.removeTasks();

        if (project) {
            project.tasks.forEach(task => {
                dom.appendTask(title, task.title, task.description, format.subDays(task.date), task.id);
            })
        }
    }

    static removeTask(projectName, taskId) {
        const project = AddProject.projects.find(p => p.title === projectName);

        if (project) {
            const taskIndex = project.tasks.findIndex(task => task.id === parseInt(taskId));
            if (taskIndex !== -1) {
                project.tasks.splice(taskIndex, 1);
                Storage.update();
                console.log(`Task ${taskId} removed from project ${projectName}`);
            } else {
                console.log(`Task ${taskId} not found in project ${projectName}`);
            }
        } else {
            console.log(`Project ${projectName} not found`);
        }

        console.log(generalProject);
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