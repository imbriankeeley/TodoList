import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './styles.css';

import { AddProject } from './projectObject.js'
import { AddTask } from "./taskObject.js";

library.add(fas, far, fab) 

dom.i2svg() 


const generalProject = new AddProject('General Tasks');

const newProject1 = new AddProject('Project 1');


const newProject2 = new AddProject('Project 2');

console.log(generalProject);
console.log(newProject1);
newProject1.remove();
console.log(newProject1);
console.log(newProject2);

const task1 = new AddTask(generalProject, 'Task 1', 'This is task 1', 'Today');

console.log(generalProject);
const task2 = new AddTask(generalProject, 'Task 2', 'This is task 2', 'Tomorrow');
console.log(generalProject);

AddProject.printAll();


