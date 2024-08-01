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
 for(let i = 0; i < localStorage.getItem('generalTasksQuantiy'); i++) {
    localStorage.removeItem(`task_${i + 1}`)
 }   
 localStorage.setItem('generalTasksQuantity', '0')
}



 



 export function loadStoredTasks() {
    console.log('hi')

    // let quantity = localStorage.getItem('generalTasksQuanity');
    // if(quantity > 0) {
    //     for(let i = 0; i < quantity; i++) {
    //         let storedTask = JSON.parse(localStorage.getItem(`task_${i + 1}`));

    //         let title = storedTask.title;
    //         console.log(title)
    //         let description = storedTask.description;
    //         console.log(description)
    //         let date = storedTask.date;
    //         console.log(date)

    //         addCard(title, description, date);
    //     }
    // }
 }









