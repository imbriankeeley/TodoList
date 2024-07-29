



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

const taskSection = document.getElementById('taskSection');

export function createCard(title, dateString, description) {
    let date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let formattedDate = `${month}/${day}/${year}`;

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

    let currentDate = new Date();
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
    };

    
    taskSection.append(card);
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

    clearCardData();
}

function clearCardData() {
    let date = '';
    let day = '';
    let month = '';
    let year = '';
    let formattedDate = '';

    let card = '';
    let taskOptions = '';
    let topTaskButtons1 = '';
    let faEllip = '';
    let topTaskButtons2 = '';
    let faXmar = '';
    let taskTitle = '';
    let titleText = '';
    let taskDescription = '';
    let descriptionText = '';
    let taskDue = '';
    let dateText = '';
    let taskDone = '';
    let taskDoneButton = '';
    let faChec = '';
}

    

export function removeCard() {

}