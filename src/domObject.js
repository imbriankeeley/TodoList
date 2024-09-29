import { DateFormat } from "./dateFormat";
import { AddProject } from "./projectObject";
import { dom } from "./interfaceObject";

export const format = new DateFormat();

const taskSection = document.getElementById('taskSection');
const details = document.getElementById('details');
const selectionTitle = document.getElementById('sTitle');
const selectionDescription = document.getElementById('sDesc');
const selectionDate = document.getElementById('sDate');
const overlay = document.getElementById('overlay');
const projectSection = document.getElementById('projectSection');


export class Dom {

    appendTask(project, title, description, date, id) {

    // Dom variables
    let card = document.createElement('div');
    card.id = id;
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
    topTaskButtons1.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card) {
            const title = card.querySelector('.taskTitle h2').innerText;
            const description = card.querySelector('.taskDescription p').innerText;
            const date = card.querySelector('.taskDue p').innerText;
            this.selectDetails(title, description, date);
            overlay.addEventListener('click', this.overlayCloseDetails);
            details.addEventListener('click', this.closeDetails);
        }
    })

    // Remove card
    topTaskButtons2.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card) {
            AddProject.removeTask('General Tasks', card.id);
            card.remove();
        }
    })

    // Remove card
    taskDoneButton.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card) {
            AddProject.removeTask('General Tasks', card.id);
            card.remove();
        }
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
        
    removeTasks() {
        while(taskSection.children.length > 1){
            taskSection.removeChild(taskSection.firstChild);
        }
    }

    selectProject(e) {

        const project = e.target.closest('.projectButton');
        if (project.classList.contains('selected')) {
        }

        const selectedButton = document.querySelector('.projectButton.selected');
        selectedButton.classList.add('un');
        selectedButton.classList.remove('selected');

        project.classList.add('selected');
        project.classList.remove('un');

        AddProject.appendTasks(project.id);

    }

    // Appends new project to html and switches to a new blank task section
    addProject (title) {
        document.querySelectorAll('.projectButton').forEach(button => {
        if (button.classList.contains('selected')) {
                    button.classList.add('un');
                    button.classList.remove('selected');
        }})
        
            
        let projectButton = document.createElement('button');
        projectButton.classList.add('projectButton', 'selected');
        projectButton.id = title;
        let h2 = document.createElement('h2');
        h2.innerText = title;
        
        projectSection.insertBefore(projectButton, projectSection.lastChild)
        projectButton.append(h2);
        
        while(taskSection.children.length > 1){
            taskSection.removeChild(taskSection.firstChild);
        }

        projectButton.addEventListener('click', (e) => {
            if (!(projectButton.classList.contains('deleted'))) {
                this.selectProject(e);                
            } else if (projectButton.classList.contains('deleted')) {
                if(projectSection.childElementCount > 2) {
                   AddProject.deleteProject(projectButton.id) 
                };
            }
        })
        
        this.detectMouse(projectButton);

        const newProject = new AddProject(title);

    }

    detectMouse(button) {
        let hoverTimer;
        const hoverDuration = 1000; // 3 seconds

        button.addEventListener('mouseenter', () => {
        hoverTimer = setTimeout(() => {
        console.log('Button hovered for 3 seconds');
        button.classList.add('deleted')
        }, hoverDuration);
    });

        button.addEventListener('mouseleave', () => {
        button.classList.remove('deleted')
        clearTimeout(hoverTimer);
    });
    }

    removeProject(title) {
        const project = document.getElementById(title);
        project.remove();
        this.removeTasks();

        const selectedButton = document.querySelector('.projectButton.selected');
        if (selectedButton) {
            selectedButton.classList.add('un');
            selectedButton.classList.remove('selected');
        }

        const newProjectSelection = document.getElementById('projectSection').firstChild; 
        newProjectSelection.classList.add('selected');
        newProjectSelection.classList.remove('un');

        AddProject.appendTasks(newProjectSelection.id);
    }

    reloadProject(title) {
        const project = AddProject.projects.find(project => project.title === title);

        let projectButton = document.createElement('button');
        projectButton.classList.add('projectButton', 'un');
        projectButton.id = title;
        let h2 = document.createElement('h2');
        h2.innerText = title;
        
        projectSection.insertBefore(projectButton, projectSection.lastChild)
        projectButton.append(h2);

        projectButton.addEventListener('click', (e) => {
            if (!(projectButton.classList.contains('deleted'))) {
                this.selectProject(e);                
            } else if (projectButton.classList.contains('deleted')) {
                if(projectSection.childElementCount > 2) AddProject.deleteProject(projectButton.id);
            }
        })
        
        this.detectMouse(projectButton);

    }

    loadFirstProject() {
        const project = AddProject.projects[0];
        const selectedProject = document.getElementById(project.title);
        selectedProject.classList.add('selected');

        AddProject.appendTasks(project.title);
    }
    
}