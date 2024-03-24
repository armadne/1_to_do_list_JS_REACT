// Importation des modules React et useState depuis la bibliothèque 'react'
// useState gère l'état des fonctions localement tel que remove_task ou add_task
import React, { useState } from 'react';

// Importation du module ReactDOM depuis la bibliothèque 'react-dom'
import ReactDOM from 'react-dom';


// Définition du composant principal de notre application
const App = () => {
  // Déclaration des états pour les tâches et la valeur du champ de texte
  const [tasks, setTasks] = useState([]); // Liste des tâches
  const [inputValue, setInputValue] = useState(''); // Valeur du champ de texte


  // Fonction pour ajouter une tâche à la liste
  const addTask = () => {
    // Vérification si le champ de texte n'est pas vide
    if (inputValue.trim() !== '') {
      // Ajout de la nouvelle tâche à la liste des tâches
      setTasks([...tasks, inputValue]);
      // Réinitialisation de la valeur du champ de texte
      setInputValue('');
    }
  };


  // Fonction pour supprimer une tâche de la liste
  const removeTask = (index) => {
    // Création d'une copie de la liste des tâches
    const newTasks = [...tasks];
    // Suppression de la tâche à l'index spécifié
    newTasks.splice(index, 1);
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
        onChange={(e) => setInputValue(e.target.value)} 
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
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Emplacement dans le DOM où le composant principal doit être rendu
  document.getElementById('root')
);