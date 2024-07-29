import {createCard} from './dom.js'


const popupForm = document.getElementById('popup-form');
const overlay = document.getElementById('overlay');
export const cardForm = document.getElementById('card-form');
const closeForm = document.getElementById('closeFormButton');
const details = document.getElementById('details');
const selectionTitle = document.getElementById('sTitle');
const selectionDescription = document.getElementById('sDesc');
const selectionDate = document.getElementById('sDate');


//Open task form
export function addTask() {
    popupForm.classList.add('show');
    overlay.classList.add('show');

    closeForm.addEventListener('click', closeTaskForm);
    overlay.addEventListener('click', closeOverlay);
};


//Submit task
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

export function selectDetails(title, description, date) {
    selectionTitle.innerText = `${title}`;
    selectionDescription.innerText = `${description}`;
    selectionDate.innerText = `${date}`;

    details.classList.add('show');
    overlay.classList.add('show');

}

export function closeDetails() {
    details.classList.remove('show');
    overlay.classList.remove('show');
}

export function overlayCloseDetails() {
    details.classList.remove('show');
    overlay.classList.remove('show');
}

export function exampleDetails() {
    selectionTitle.innerText = "Walk dog";
    selectionDescription.innerText = "Walk dog every 4 hours";
    selectionDate.innerText = "Due 7/31/25";

    

    details.classList.add('show');
    overlay.classList.add('show');


    overlay.addEventListener('click', overlayCloseDetails);
    details.addEventListener('click', closeDetails);
}





