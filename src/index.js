import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './styles.css';

import {cardForm, addTask, submitTask, selectDetails, exampleDetails, closeExample} from './task.js'
import { removeCard, removeExample } from './dom.js'
import { addProject } from './project.js'

library.add(fas, far, fab) 

dom.i2svg() 

document.getElementById('taskButton').addEventListener('click', addTask);

//Get data from user after a successful sumbit and add card
cardForm.addEventListener('submit', submitTask)


document.getElementById('removeExample').addEventListener('click', removeExample);
document.getElementById('exampleDone').addEventListener('click', removeExample);

document.querySelectorAll('.details').forEach(button => {button.addEventListener('click', selectDetails)}) 

document.getElementById('exampleSelect').addEventListener('click', exampleDetails)

document.getElementById('projectButton').addEventListener('click', addProject);

