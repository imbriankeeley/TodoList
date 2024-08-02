import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './styles.css';

import { cardForm, addTask, submitTask, selectDetails, exampleDetails, closeExample, addTaskGeneral} from './task.js'
import { removeCard, removeExample, createExampleCard } from './dom.js'
import { addProject } from './project.js'
import { putExampleBack, loadStoredTasks, clearGeneralTasks, generalTasks } from './storage.js'

library.add(fas, far, fab) 

dom.i2svg() 

// putExampleBack()
if(localStorage.getItem('exampleRemove') === 'false') {
 createExampleCard();
}

// To clear task storage in development
// clearGeneralTasks()


// localStorage.setItem('generalTasksQuantity', '0')



 loadStoredTasks();

 // Console logs to track data during development
console.log(localStorage.getItem('generalTasksQuantity'));
console.log(generalTasks)





//Add task to general project
document.getElementById('taskButton').addEventListener('click', addTask);

//Get data from user after a successful sumbit and add card
cardForm.addEventListener('submit', submitTask)


//Select details for each task
document.querySelectorAll('.details').forEach(button => {button.addEventListener('click', selectDetails)}) 



//Add project
document.getElementById('projectButton').addEventListener('click', addProject);



console.log(localStorage)



