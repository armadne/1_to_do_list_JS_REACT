// Importation des modules React et useState depuis la bibliothèque 'react'
// useState gère l'état des fonctions localement tel que remove_task ou add_task
import React, { useState } from 'react';

// Importation du module ReactDOM depuis la bibliothèque 'react-dom'
import ReactDOM from 'react-dom';


// Définition du composant principal de notre application
//composant princiapl =  "fonction globale" qui regroupe les fonction addTask et removeTask qui sont des fonctions locales par rapport a la composante principale "app"
const App = () => {

  

// Déclaration des états pour les tâches et la valeur du champ de texte

//tasks: C'est la variable qui stockera l'état actuel de la liste des tâches. Au début, cette variable sera initialisée avec un tableau vide ([]), indiquant qu'il n'y a aucune tâche.
//setTasks: C'est la fonction qui sera utilisée pour mettre à jour la valeur de tasks. Lorsque vous appelez cette fonction avec une nouvelle valeur, React mettra à jour l'état de tasks et ré-renderisera le composant avec la nouvelle valeur.
//useState([]): C'est la fonction useState elle-même. L'argument passé à useState ([] dans ce cas) est la valeur initiale de l'état tasks.


  const [tasks, setTasks] = useState([]); // Liste des tâches



//setInputValue: C'est la fonction qui sera utilisée pour mettre à jour la valeur de inputValue. Lorsque vous appelez cette fonction avec une nouvelle valeur, React mettra à jour l'état de inputValue et ré-renderisera le composant avec la nouvelle valeur.
//useState(''): C'est la fonction useState elle-même. L'argument passé à useState ('' dans ce cas) est la valeur initiale de l'état inputValue.


  const [inputValue, setInputValue] = useState(''); // Valeur du champ de texte



  // Fonction pour ajouter une tâche à la liste
  const addTask = () => {
    // Vérification si le champ de texte est rempli
    if (inputValue.trim() !== '') {
      //SI LE CHAMPS EST REMPLI ALORS 
      // Ajout de la nouvelle tâche à la liste des tâches
      setTasks([...tasks, inputValue]);
      // Réinitialisation de la valeur du champ de texte, donc efface ce qui'il y a dans le champ de texte pour que l'utilisateur ait la possibilité de rajouter une tache s'il le souhaite
      setInputValue('');
    }
  };


  // Fonction pour supprimer une tâche de la liste
  // remplcer "index" par la position de lélément a supprimer par exemple si l'element a supprimer dans la liste est en position 2 alors on va mettre 2 a la place de "index"
  const removeTask = (index) => {
    // Création d'une copie de la liste des tâches
    const newTasks = [...tasks];
    // Suppression de la tâche à l'index spécifié
    newTasks.splice(index, 1); // indique combien d'éléments doivent être supprimés, dans ce cas, 1.,, Lorsque vous utilisez newTasks.splice(1, 5), cela signifie que vous supprimez 5 éléments du tableau newTasks à partir de l'index 1 (c'est-à-dire le deuxième élément du tableau) jusqu'à l'index 5.
    // Mise à jour de la liste des tâches
    setTasks(newTasks);
  };



  // Rendu visuel de l'application
  return (
    <div>
      {/* Titre de l'application */}
      <h1>Todo List</h1>
      {/* Champ de texte pour ajouter une nouvelle tâche */}
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} // e représente l'objet événement, et target fait référence à l'élément HTML donc à input qui a déclenché l'événement onChange, donc e.target.value représente la valeur actuelle du champ de texte et chaque fois que le contenu du champ de texte change, la fonction setinputValue est appelée pour mettre à jour l'état inputValue avec la nouvelle valeur du champ de texte. 
        placeholder="Ajouter une tâche" 
      />
      {/* Bouton pour ajouter une tâche */}
      <button onClick={addTask}>Ajouter</button>
      {/* Liste des tâches */}
      <ul>
        {/* Parcours de la liste des tâches et affichage de chaque tâche avec un bouton de suppression */}
        {tasks.map((task, index) => (
          <li key={index}>
            {/* Texte de la tâche */}
            {task} 
            {/* Bouton pour supprimer la tâche */}
            <button onClick={() => removeTask(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};



// Rendu du composant principal dans le DOM
ReactDOM.render(
  // React.StrictMode sert a afficher les erreurs si il y en a 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Emplacement dans le DOM où le composant principal doit être rendu
  document.getElementById('root')
);