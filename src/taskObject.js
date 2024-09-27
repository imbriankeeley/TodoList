import { Dom } from './domObject';
import { DateFormat } from './dateFormat';
const dom = new Dom();
const format = new DateFormat();

export class AddTask {

    constructor(project, title, description, date) {
        this.project = project;
        this.projectTitle = project.getName();
        this.id = project.getTaskId();
        this.title = title;
        this.description = description;
        this.date = format.formatDate(date);

        project.addTask(this);

        dom.appendTask(project, title, description, date)
    }

    
    remove() {
        this.project.tasks.splice((this.id - 1), 1)
        // --this.project.taskId;
    }
}


