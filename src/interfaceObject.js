import { AddProject } from './projectObject.js'
import { AddTask } from "./taskObject.js";
import DateFormat from './dateFormat.js'
import { Dom } from './domObject.js'

 const format = new DateFormat();

export const generalProject = new AddProject('General Tasks');
const dom = new Dom();
const addTask = document.getElementById('addTask');
const popupForm = document.getElementById('popup-form');
const overlay = document.getElementById('overlay');
const cardForm = document.getElementById('card-form');
const closeForm = document.getElementById('closeFormButton');
const details = document.getElementById('details');
const selectionTitle = document.getElementById('sTitle');
const selectionDescription = document.getElementById('sDesc');
const selectionDate = document.getElementById('sDate');


// dom.appendTask(generalProject, 'Task 1', 'This is task 1', format.formatDate(new Date()))

export class InterfaceObject {

    constructor() {
        this.addTask = this.addTask.bind(this);
        this.submitTask = this.submitTask.bind(this);
        this.closeTaskForm = this.closeTaskForm.bind(this);
        this.closeOverlay = this.closeOverlay.bind(this);
    }

    start() {
        
        
        console.log(generalProject);

        cardForm.addEventListener('submit', this.submitTask)
        addTask.addEventListener('click', this.addTask);

    };

    addTask() {
        popupForm.classList.add('show');
        overlay.classList.add('show');
    
        closeForm.addEventListener('click', this.closeTaskForm);
        overlay.addEventListener('click', this.closeOverlay);
    };

    submitTask(event) {

    //Get data from user after a successful sumbit and add card
        event.preventDefault();

        let title = document.getElementById('title').value;
        let date = document.getElementById('date').value;
        let description = document.getElementById('description').value;

        const task = new AddTask(generalProject, title, description, (date));

        console.log(generalProject);

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