import { Dom } from './domObject';
const dom = new Dom();

export class AddTask {

    constructor(project, title, description, date) {
        this.project = project;
        this.projectTitle = project.getName();
        this.id = project.getTaskId();
        this.title = title;
        this.description = description;
        this.date = date;

        project.addTask(this);
    }

    
    remove() {
        this.project.tasks.splice((this.id - 1), 1)
        // --this.project.taskId;
    }
}


