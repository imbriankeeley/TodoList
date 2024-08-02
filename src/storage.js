import { addCard } from "./dom";

// Development - replaces example task on page
export function putExampleBack() {
    localStorage.setItem('exampleRemove', false)
}

// Initializing object for example task
const exampleTaskObj = {
    title: 'Walk dog',
    description: 'Walk dog every 4 hours',
    date: 'Due 7/31/25'
};

// Stringify and set example task in storage
const exampleTaskObjStringified = JSON.stringify(exampleTaskObj);

localStorage.setItem('exampleTask', exampleTaskObjStringified);


// Function to create new task objects
export function AddTask(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
}


// Initializing general tasks array to hold task objects
export const generalTasks = [];


// Development - to clear all tasks from storage
export function clearGeneralTasks() {
    
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









