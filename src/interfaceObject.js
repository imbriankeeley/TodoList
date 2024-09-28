import { AddProject } from './projectObject.js'
import { AddTask } from "./taskObject.js";
import DateFormat from './dateFormat.js'
import { Dom } from './domObject.js'
import { Storage } from './localStorage.js';

const format = new DateFormat();

export const generalProject = new AddProject('General Tasks');
export const dom = new Dom();
const addTask = document.getElementById('addTask');
const popupForm = document.getElementById('popup-form');
const overlay = document.getElementById('overlay');
const cardForm = document.getElementById('card-form');
const closeForm = document.getElementById('closeFormButton');
const projectButton = document.getElementById('projectButtonDiv');
const generalProjectButton = document.getElementById('General Tasks');
const projectSection = document.getElementById('projectSection');
const projectForm = document.getElementById('projectForm');


export class InterfaceObject {

    constructor() {
        this.addTask = this.addTask.bind(this);
        this.submitTask = this.submitTask.bind(this);
        this.closeTaskForm = this.closeTaskForm.bind(this);
        this.closeOverlay = this.closeOverlay.bind(this);
    }

    start() {

        document.addEventListener('DOMContentLoaded', () => {
            // On reload
            Storage.lookup();
        })

        // Adding event listeners to all buttons
        cardForm.addEventListener('submit', this.submitTask)
        addTask.addEventListener('click', this.addTask);
        dom.detectMouse(generalProjectButton);
        generalProjectButton.addEventListener('click', (e) => {
            if (!(generalProjectButton.classList.contains('deleted'))) {
                dom.selectProject(e);            
            } else if (generalProjectButton.classList.contains('deleted')) {
                if(projectSection.childElementCount > 2) AddProject.deleteProject(generalProjectButton.id);
            }
        })
        projectButton.addEventListener('click', () => {
            projectForm.classList.remove('popup-project-form')
        });
        projectForm.addEventListener('submit', (event) => {
            event.preventDefault();
            projectForm.classList.add('popup-project-form');
            let title = document.querySelector('#projectName').value;
            projectForm.reset(); 
            dom.addProject(title);
        });
        
        
        

    };

    addTask() {
        popupForm.classList.add('show');
        overlay.classList.add('show');
    
        closeForm.addEventListener('click', this.closeTaskForm);
        overlay.addEventListener('click', this.closeOverlay);
    };

    submitTask(event) {

        event.preventDefault();

        let title = document.getElementById('title').value;
        let date = document.getElementById('date').value;
        let description = document.getElementById('description').value;

        const project = document.querySelector('.projectButton.selected').id;

        const task = new AddTask(project, title, description, date);

        console.log(task);

        document.getElementById('title').value = '';
        document.getElementById('date').value = '';
        document.getElementById('description').value = '';

        
        this.closeTaskForm();
    }

    closeTaskForm() {
        popupForm.classList.remove('show');
        overlay.classList.remove('show');
        popupForm.removeEventListener('click', this.closeTaskForm);
        overlay.removeEventListener('click', this.closeOverlay);
    };
    
    closeOverlay() {
        popupForm.classList.remove('show');
        overlay.classList.remove('show');
        popupForm.removeEventListener('click', this.closeTaskForm);
        overlay.removeEventListener('click', this.closeOverlay);
    };

}