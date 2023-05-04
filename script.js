const app = {
    //On stocke une référence a la div #app qui contient toute notre affichage
    containerEl: document.getElementById('app'),

    //Notre propriété state va représenter la source de vérité de notre application
    // c'est là que se trouve les données
    state: {
        tasks: [
            {
                id: 1,
                label: 'Arroser le chien',
                done: false
            },
            {
                id: 2,
                label: 'Sortir la voiture',
                done: true
            },
            {
                id: 3,
                label: 'Laver les plantes',
                done: false
            }
        ]
    },

    init() {
        console.log('App initialisée.');
        app.render();
    },

    createTitle() {
        const titleEl = document.createElement('h1');
        titleEl.textContent = 'Todo-list';
        app.containerEl.appendChild(titleEl);

    },

    createList() {
        const tasksEl = document.createElement('ul');

        //Poour chacune des tâches 
        app.state.tasks.forEach((task) => {
            //On crée un élément <li>
            const taskEl = document.createElement('li');
            taskEl.textContent = task.label;
            taskEl.id = task.id
            taskEl.classList.add('task');
            //Si la tâche et terminée (équivalent à task.done == true)
            if(task.done) {
                //On ajoute la classe task--done
                taskEl.classList.add('task--done');
            }
            tasksEl.appendChild(taskEl);

        });

        //On écoute l'événement click sur cette nouvelle liste de tâches <ul>
        tasksEl.addEventListener('click', (event) => {
            //Si on a cliqué sur une tâche
            if(event.target.classList.contains('task')) {
                //ATTENTION ALGO PAS EVIDENT
                //Pour chacune des tâches, on va remplacer la valeur 
                app.state.tasks = app.state.tasks.map((task) => {
                    //Si l'id de la tâche correspond a l'id
                    //du <li> sur lequel on a cliqué
                    if(task.id === Number(event.target.id)) {
                        //On renvoie un nouvel objet tâche
                        //qui contient le même id (cliquer sur la tâche)
                        //ne change pas son id
                        //mais qui contient l'inverse du done de la tâche
                        //si elle est faite -> pas faite
                        //si elle est pas faite -> faite
                        return {
                            id: task.id,
                            label: task.label,
                            done: !task.done
                        }
                    } else {
                        //Si la tâche n'avait pas à être modifiée
                        //on renvoie exactement le même objet de tâche 
                        //pas de modification par le .map !
                        return task;
                    }
                });

                //Le state a été modifié : je déclenche donc un rerendu !
                app.render();
        
            }
        });

        app.containerEl.appendChild(tasksEl);
    },
    render() {
        console.log('=== Un re-rendu a été effectué ===');
        console.log(app.state);
        //On vide toute notre div #app
        app.containerEl.innerHTML = '';

        //Affiche tous les composants
        app.createTitle();
        app.createList();
    }
};

// Quand le DOM est prêt et rempli dans notre navigateur
// l'évènement DOMContentLoaded est déclenché
// et on appelle notre callback : ici app.init
// qui va initialiser notre application
document.addEventListener('DOMContentLoaded', app.init);