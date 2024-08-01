import { addCard } from "./dom";

export function putExampleBack() {
    localStorage.setItem('exampleRemove', false)
}

const exampleTaskObj = {
    title: 'Walk dog',
    description: 'Walk dog every 4 hours',
    date: 'Due 7/31/25'
};

const exampleTaskObjStringified = JSON.stringify(exampleTaskObj);

localStorage.setItem('exampleTask', exampleTaskObjStringified);


export function AddTask(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
}


export const generalTasks = [];

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



 



 export function loadStoredTasks() {

    let quantity = localStorage.getItem('generalTasksQuantity');


    

    
    if(quantity > 0) {
        for(let i = 0; i < quantity; i++) {
            let storedTasks = JSON.parse(localStorage.getItem('generalTasks'));

            let title = storedTasks[i].title;
            let description = storedTasks[i].description;
            let date = storedTasks[i].date;

            generalTasks.push((storedTasks[i]));


            addCard(title, description, date);
        }
        
        localStorage.setItem('generalTasks', JSON.stringify(generalTasks))
    }


 }









