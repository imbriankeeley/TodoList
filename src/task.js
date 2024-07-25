
const popupForm = document.getElementById('popup-form');
const overlay = document.getElementById('overlay');
const closeFormBtn = document.getElementById('close-form-btn');
const cardForm = document.getElementById('card-form');
const closeForm = document.getElementById('closeFormButton');



export function addTask() {
    popupForm.classList.add('show');
    overlay.classList.add('show');


    closeForm.addEventListener('click', closeTaskForm);
    overlay.addEventListener('click', closeOverlay);
};

function closeTaskForm() {
    popupForm.classList.remove('show');
    overlay.classList.remove('show');
};

function closeOverlay() {
    popupForm.classList.remove('show');
        overlay.classList.remove('show');
};


