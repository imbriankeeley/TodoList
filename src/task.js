import {createCard} from './dom.js'


const popupForm = document.getElementById('popup-form');
const overlay = document.getElementById('overlay');
export const cardForm = document.getElementById('card-form');
const closeForm = document.getElementById('closeFormButton');
const details = document.getElementById('details');



export function addTask() {
    popupForm.classList.add('show');
    overlay.classList.add('show');

    closeForm.addEventListener('click', closeTaskForm);
    overlay.addEventListener('click', closeOverlay);
};

export function submitTask(event) {
    //Get data from user after a successful sumbit and add card
        event.preventDefault();

        let title = document.getElementById('title').value;
        let date = document.getElementById('date').value;
        let description = document.getElementById('description').value;

        createCard(title, date, description);

        document.getElementById('title').value = '';
        document.getElementById('date').value = '';
        document.getElementById('description').value = '';
        
        closeTaskForm();
        closeOverlay();
    }


function closeTaskForm() {
    popupForm.classList.remove('show');
    overlay.classList.remove('show');
};

function closeOverlay() {
    popupForm.classList.remove('show');
        overlay.classList.remove('show');
};

export function selectDetails() {
    details.classList.add('show');
    overlay.classList.add('show');
}


