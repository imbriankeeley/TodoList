import { addCard } from "./dom";


// Inititalize project array to hold projects
export const projects = [];
localStorage.setItem('projects', JSON.stringify(projects))



// Initializing general tasks array to hold task objects
export function createGeneralTasksProject() {
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate());
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let formattedDate = `${month}/${day}/${year}`;
    let exampleTask = AddTask(0, 'Example', 'This is an example', formattedDate)
    createProjectArray(0, 'generalTasks', [exampleTask])
}

export const generalTasks = [];
localStorage.setItem('projects', JSON.stringify(projects))




// Function to create new task objects
export function AddTask(id, title, description, date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
}

// Function to create a new project
export function AddProject(id, title, tasks) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
}


export function createProjectArray (id, title, tasks) {

    let newProject = AddProject(id, title, tasks);

    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
    console.log(localStorage);
}

// Development - to clear all tasks from storage
export function clearGeneralTasks () {
    
let quantity = localStorage.getItem('generalTasksQuantity');
 for(let i = 0; i < quantity; i++) {
    
    let storedTasks = JSON.parse(localStorage.getItem('generalTasks'));
    storedTasks.shift();
    localStorage.setItem('generalTasks', JSON.stringify(storedTasks));
    generalTasks.shift();
 }   
 localStorage.setItem('generalTasksQuantity', '0')
}



 



















// Loads cards in local storage to page on refresh
 export function loadStoredTasks() {

    let quantity = localStorage.getItem('generalTasksQuantity');
    
    if(quantity > 0) {
        for(let i = 0; i < quantity; i++) {
            let storedTasks = JSON.parse(localStorage.getItem('generalTasks'));

            let title = storedTasks[i].title;
            let description = storedTasks[i].description;
            let date = storedTasks[i].date;
            let id = i;

            generalTasks.push((storedTasks[i]));


            addCard(id, title, description, date);
        }
        
        localStorage.setItem('generalTasks', JSON.stringify(generalTasks))
    }


 }









