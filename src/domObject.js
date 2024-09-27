import { DateFormat } from "./dateFormat";
import { AddTask } from "./storage";

const format = new DateFormat();

const taskSection = document.getElementById('taskSection');
const projectButton = document.getElementById('projectButtonDiv');
const projectSection = document.getElementById('projectSection');


export class Dom {

    appendTask(project, title, description, date) {

    // Dom variables
    let card = document.createElement('div');
    card.project = project;
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
    dateText.innerText = "Due " + format.formatDate(date);
    let taskDone = document.createElement('div');
    taskDone.classList.add('taskDone');
    let taskDoneButton = document.createElement('button');
    taskDoneButton.classList.add('taskDoneButton');
    let faChec = document.createElement('i');
    faChec.classList.add('fa-solid', 'fa-check');

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
        this.selectDetails(titleText.innerText, descriptionText.innerText, dateText.innerText)

        overlay.addEventListener('click', this.overlayCloseDetails);
        details.addEventListener('click', this.closeDetails);

    })
    }

    selectDetails(title, description, date) {
        selectionTitle.innerText = `${title}`;
        selectionDescription.innerText = `${description}`;
        selectionDate.innerText = `${date}`;
    
        details.classList.add('show');
        overlay.classList.add('show');
    }

    closeDetails() {
        details.classList.remove('show');
        overlay.classList.remove('show');
    };
    
    overlayCloseDetails() {
        details.classList.remove('show');
        overlay.classList.remove('show');
    };

}