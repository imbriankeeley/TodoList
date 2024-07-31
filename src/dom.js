import { selectDetails, closeDetails, overlayCloseDetails } from "./task";


const taskSection = document.getElementById('taskSection');
const projectButton = document.getElementById('projectButtonDiv');
const projectSection = document.getElementById('projectSection');



// Check if date is in the past
function isPast(date, currentDate) {
    return currentDate > date;
}

// Check if date is tomorrow
function isTomorrow(currentDate, date) {
    //Setting to midnight to compare only dates
    currentDate.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    //Calculate diffrence
    let difference = date - currentDate;

    let differenceInDays = difference / (1000 * 60 * 60 * 24);

    //Check if difference is at least a day but less than 2
    return differenceInDays >= 1 && differenceInDays < 2;
}

// Create task card and append to html
export function createCard(title, dateString, description) {
    // Date variables
    let date = new Date(dateString);
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 1);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let formattedDate = `${month}/${day}/${year}`;

    // Dom variables
    let card = document.createElement('div');
    card.classList.add('card');
    let taskOptions = document.createElement('div');
    taskOptions.classList.add('taskOptions');
    let topTaskButtons1 = document.createElement('button');
    topTaskButtons1.classList.add('topTaskButtons');
    let faEllip = document.createElement('i');
    faEllip.classList.add('fa-solid', 'fa-ellipsis');
    let topTaskButtons2 = document.createElement('button');
    topTaskButtons2.classList.add('topTaskButtons');
    let faXmar = document.createElement('i');
    faXmar.classList.add('fa-solid', 'fa-xmark');
    let taskTitle = document.createElement('div');
    taskTitle.classList.add('taskTitle');
    let titleText = document.createElement('h2');
    titleText.innerText = title;
    let taskDescription = document.createElement('div');
    taskDescription.classList.add('taskDescription');
    let descriptionText = document.createElement('p');
    descriptionText.innerText = description;
    let taskDue = document.createElement('div');
    taskDue.classList.add('taskDue');
    let dateText = document.createElement('p');
    dateText.innerText = "Due " + formattedDate;
    let taskDone = document.createElement('div');
    taskDone.classList.add('taskDone');
    let taskDoneButton = document.createElement('button');
    taskDoneButton.classList.add('taskDoneButton');
    let faChec = document.createElement('i');
    faChec.classList.add('fa-solid', 'fa-check');


    // Urgency functionality for card declaration
    if (date.getTime() === currentDate.getTime()){
        card.classList.add('highUrgency');
        taskDoneButton.classList.add('highUrgency');
        topTaskButtons1.classList.add('highUrgency');
        topTaskButtons2.classList.add('highUrgency');
    } else if (isTomorrow(currentDate, date)) {
        card.classList.add('mediumUrgency');
        taskDoneButton.classList.add('mediumUrgency');
        topTaskButtons1.classList.add('mediumUrgency');
        topTaskButtons2.classList.add('mediumUrgency');
    }

    
    // Appending to html
    taskSection.insertBefore(card, taskSection.lastChild)
    card.append(taskOptions);
    taskOptions.append(topTaskButtons1);
    taskOptions.append(topTaskButtons2);
    topTaskButtons1.append(faEllip);
    topTaskButtons2.append(faXmar);
    card.append(taskTitle);
    taskTitle.append(titleText);
    card.append(taskDescription);
    taskDescription.append(descriptionText);
    card.append(taskDue);
    taskDue.append(dateText);
    card.append(taskDone);
    taskDone.append(taskDoneButton);
    taskDoneButton.append(faChec);

    // Detail button to popup more info
    topTaskButtons1.addEventListener('click', function() {
        selectDetails(titleText.innerText, descriptionText.innerText, dateText.innerText)

        overlay.addEventListener('click', overlayCloseDetails);
        details.addEventListener('click', closeDetails);

    })

    // Complete/remove card
    topTaskButtons2.addEventListener('click', () => {
        card.remove();
    })

    taskDoneButton.addEventListener('click', () => {
        card.remove();
    })

    
    // Restart card if date is in the past
    if (isPast(date, currentDate)){
        card.remove();
        alert(`We can't go back to the future!\nChoose a different date`);
    }

}


    
// Removes just the example task
export function removeExample() {
    document.getElementById('example').remove();
    localStorage.setItem('exampleRemove', true);
    console.log(localStorage)
}

// Resets project button html
function replaceProject() {
    let button = document.createElement('button');
    button.id = 'projectButton';
    let div = document.createElement('div');
    div.id = 'addProject';
    let i = document.createElement('i');
    i.classList.add('fa-solid', 'fa-plus');
    let h2 = document.createElement('h2');
    h2.innerText = 'Project';

    while(projectButton.firstChild)
    projectButton.removeChild(projectButton.firstChild);

    projectButton.append(button);
    button.append(div);
    div.append(i);
    button.append(h2);

    projectButton.classList.remove('projectBorder')
}

// Opens form to input title for new project
export function addProjectForm() {
    let inputForm = document.createElement('form');
    let input = document.createElement('input');
    let submit = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'projectName');
    input.setAttribute('name', 'projectName');
    input.setAttribute('maxlength', '10');
    input.setAttribute('placeholder', 'Project Name...');
    input.setAttribute('required', '');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('style', 'display: none');

    projectButton.append(inputForm);
    inputForm.append(input);
    inputForm.append(submit);

    projectButton.classList.add('projectBorder')

    
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        replaceProject();
        let title = input.value;
        addProject(title);
    });

}


// Appends new project to html and switches to a new blank task section
function addProject (title) {
    document.querySelectorAll('.projectButton').forEach(button => {
        if (button.classList.contains('selected')) {
            button.classList.add('unselected');
        }
    })
    
    let projectButton = document.createElement('button');
    projectButton.classList.add('projectButton', 'selected');
    let h2 = document.createElement('h2');
    h2.innerText = title;

    



    projectSection.insertBefore(projectButton, projectSection.lastChild)
    projectButton.append(h2);

    if(taskSection.children.length > 1){
        taskSection.removeChild(taskSection.firstChild);
    }
}