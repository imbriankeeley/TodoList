
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