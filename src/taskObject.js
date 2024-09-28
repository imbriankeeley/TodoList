import { Dom } from './domObject';
import { DateFormat } from './dateFormat';
import { AddProject, storage } from './projectObject';
const dom = new Dom();
const format = new DateFormat();

export class AddTask {

    constructor(projectTitle, title, description, date) {
        const project = AddProject.projects.find(p => p.title === projectTitle)
            this.projectTitle = projectTitle;
            this.id = project.getTaskId();
            this.title = title;
            this.description = description;
            this.date = format.formatDate(date);

            project.addTask(this);

            dom.appendTask(projectTitle, title, description, date, this.id)
    
    }

}