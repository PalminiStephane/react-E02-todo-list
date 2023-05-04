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

//au submit du formulaire (qu'on appuie sur entrée OU un bouton type="submit")
formEl.addEventListener('submit', (event) => {
    //preventDefault va prévenir le comportement par défaut du rechargement du formulaire
    event.preventDefault();
    //On récupère la valeur de l'input
    const newTaskLabel = formEl.querySelector('.new-task').value;
    
    //On crée un nouvel élément <li>
    const newTaskLiEl = document.createElement('li');
    //On ajoute la classe task à la tâche
    newTaskLiEl.classList.add('task');
    //On donne au <li> une valeur de texte
    newTaskLiEl.textContent = newTaskLabel;

    //On ajoute un bouton à ce nouveau <li>
    const newTaskDeleteButtonEl = document.createElement('button');
    newTaskDeleteButtonEl.classList.add('delete-button');
    newTaskDeleteButtonEl.textContent = 'x';
    //On ajoute ce bouton dans le <li>
    newTaskLiEl.appendChild(newTaskDeleteButtonEl);

    //On ajoute le <li> dans notre <ul>
    tasksEl.appendChild(newTaskLiEl);

    //On vide l'input du formulaire
    formEl.querySelector('.new-task').value = '';
});