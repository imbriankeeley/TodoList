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
    localStorage.removeItem(`task_${i + 1}`)
 }   
 localStorage.setItem('generalTasksQuantity', '0')
}



 



 export function loadStoredTasks() {

    let quantity = localStorage.getItem('generalTasksQuantity');


    

    
    if(quantity > 0) {
        for(let i = 0; i < quantity; i++) {
            let storedTask = JSON.parse(localStorage.getItem(`task_${i + 1}`));

            let title = storedTask.title;
            let description = storedTask.description;
            let date = storedTask.date;

            generalTasks.push(localStorage.getItem(`task_${i + 1}`));


            addCard(title, description, date);
        }
    }


 }









