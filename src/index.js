import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './styles.css';

import { cardForm, addTask, submitTask, selectDetails, exampleDetails, closeExample} from './task.js'
import { removeCard, removeExample } from './dom.js'
import { addProject } from './project.js'
import { putExampleBack, loadStoredTasks, clearGeneralTasks, generalTasks } from './storage.js'

library.add(fas, far, fab) 

dom.i2svg() 


// To clear task storage in development
 clearGeneralTasks()

// localStorage.setItem('generalTasksQuantity', '0')

// loadStoredTasks();
console.log(localStorage.getItem('generalTasksQuantity'));
console.log(generalTasks)



// To return example task in development
// putExampleBack();

if (localStorage.getItem('exampleRemove') === 'true') {
    removeExample();
};



document.getElementById('taskButton').addEventListener('click', addTask);

//Get data from user after a successful sumbit and add card
cardForm.addEventListener('submit', submitTask)

//Remove example task
document.getElementById('removeExample').addEventListener('click', removeExample);
document.getElementById('exampleDone').addEventListener('click', removeExample);

//Select details for each task
document.querySelectorAll('.details').forEach(button => {button.addEventListener('click', selectDetails)}) 
document.getElementById('exampleSelect').addEventListener('click', exampleDetails)

//Add project
document.getElementById('projectButton').addEventListener('click', addProject);



console.log(localStorage)



