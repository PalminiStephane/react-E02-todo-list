const tasksEl = document.querySelector('.tasks');
const formEl = document.getElementById('new-task-form');

tasksEl.addEventListener('click', (event) => {
    console.log(event);
    if(event.target.classList.contains('delete-button')) {
        event.target.parentElement.remove();
    }

    if(event.target.classList.contains('task')) {
        event.target.classList.toggle('task--done');
    }
});

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTaskLabel = formEl.querySelector('.new-task').ariaValueMax;

    const newTaskLiEl = document.createElement('li');
    newTaskLiEl.textContent = newTaskLabel;

    const newTaskDeleteButtonEl = document.createElement('button');
    newTaskDeleteButtonEl.classList.add('delete-button');
    newTaskDeleteButtonEl.textContent = 'x';
    newTaskLiEl.appendChild(newTaskDeleteButtonEl);

    tasksEl.appendChild(newTaskLiEl);
})