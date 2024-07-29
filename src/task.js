import {createCard} from './dom.js'


const popupForm = document.getElementById('popup-form');
const overlay = document.getElementById('overlay');
const cardForm = document.getElementById('card-form');
const closeForm = document.getElementById('closeFormButton');



export function addTask() {
    popupForm.classList.add('show');
    overlay.classList.add('show');

    closeForm.addEventListener('click', closeTaskForm);
    overlay.addEventListener('click', closeOverlay);


    //Get data from user after a successful sumbit
    cardForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let title = document.getElementById('title').value;
        let date = document.getElementById('date').value;
        let description = document.getElementById('description').value;

        let taskTitle = title;
        let taskDate = date;
        let taskDescription = description;

        document.getElementById('title').value = '';
        document.getElementById('date').value = '';
        document.getElementById('description').value = '';

        createCard(taskTitle, taskDate, taskDescription);

        closeTaskForm();
        closeOverlay();
    })
};

function closeTaskForm() {
    popupForm.classList.remove('show');
    overlay.classList.remove('show');
};

function closeOverlay() {
    popupForm.classList.remove('show');
        overlay.classList.remove('show');
};


