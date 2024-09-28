import { Dom } from './domObject';
import { DateFormat } from './dateFormat';
import { AddProject } from './projectObject';
const dom = new Dom();
const format = new DateFormat();

export class AddTask {

    constructor(projectTitle, title, description, date) {
        const project = AddProject.projects.find(p => p.title === projectTitle)
            this.projectTitle = project.getName();
            this.id = project.getTaskId();
            this.title = title;
            this.description = description;
            this.date = format.formatDate(date);

            project.addTask(this);

            dom.appendTask(projectTitle, title, description, date, this.id)
        
        
    }

}

































// import {createCard} from './dom.js'


// const popupForm = document.getElementById('popup-form');
// const overlay = document.getElementById('overlay');
// export const cardForm = document.getElementById('card-form');
// const closeForm = document.getElementById('closeFormButton');
// const details = document.getElementById('details');
// const selectionTitle = document.getElementById('sTitle');
// const selectionDescription = document.getElementById('sDesc');
// const selectionDate = document.getElementById('sDate');



// //Open task form
// export function addTask() {
//     popupForm.classList.add('show');
//     overlay.classList.add('show');

//     closeForm.addEventListener('click', closeTaskForm);
//     overlay.addEventListener('click', closeOverlay);
// };


// //Submit task
// let taskNum = parseInt(localStorage.getItem('taskNumStored'));
// export function submitTask(event) {
//     //Get data from user after a successful sumbit and add card
//         event.preventDefault();

//         let title = document.getElementById('title').value;
//         let date = document.getElementById('date').value;
//         let description = document.getElementById('description').value;

//         createCard(taskNum, title, date, description);


//         document.getElementById('title').value = '';
//         document.getElementById('date').value = '';
//         document.getElementById('description').value = '';
        
//         closeTaskForm();
//         closeOverlay();
//     }

// //Closing form functionality
// function closeTaskForm() {
//     popupForm.classList.remove('show');
//     overlay.classList.remove('show');
// };

// function closeOverlay() {
//     popupForm.classList.remove('show');
//     overlay.classList.remove('show');
// };

// //Select details button functionality
// export function selectDetails(title, description, date) {
//     selectionTitle.innerText = `${title}`;
//     selectionDescription.innerText = `${description}`;
//     selectionDate.innerText = `${date}`;

//     details.classList.add('show');
//     overlay.classList.add('show');

// }

// //Close details functionality
// export function closeDetails() {
//     details.classList.remove('show');
//     overlay.classList.remove('show');
// }

// export function overlayCloseDetails() {
//     details.classList.remove('show');
//     overlay.classList.remove('show');
// }

// //Open details for example task
// export function exampleDetails() {
//     selectionTitle.innerText = "Walk dog";
//     selectionDescription.innerText = "Walk dog every 4 hours";
//     selectionDate.innerText = "Due 7/31/25";

    

//     details.classList.add('show');
//     overlay.classList.add('show');


//     overlay.addEventListener('click', overlayCloseDetails);
//     details.addEventListener('click', closeDetails);
// }





