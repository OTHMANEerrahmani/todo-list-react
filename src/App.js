import React, { useState } from "react";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [description, setDescription] = useState("");

    const addTask = () => {
        if (newTask.trim() !== "" && description.trim() !== "") {
            setTasks([...tasks, { title: newTask, desc: description }]);
            setNewTask("");
            setDescription("");
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Titre de la tâche..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <textarea
                    placeholder="Description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button onClick={addTask}>Ajouter</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <h3>{task.title}</h3>
                        <p>{task.desc}</p>
                        <button onClick={() => deleteTask(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
const [deadline, setDeadline] = useState("");

const addTask = () => {
    if (newTask.trim() !== "" && description.trim() !== "" && deadline !== "") {
        setTasks([...tasks, { title: newTask, desc: description, deadline }]);
        setNewTask("");
        setDescription("");
        setDeadline("");
    }
};

return (
    <div className="App">
        <h1>To-Do List</h1>
        <div>
            <input
                type="text"
                placeholder="Titre de la tâche..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <textarea
                placeholder="Description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
            />
            <button onClick={addTask}>Ajouter</button>
        </div>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    <h3>{task.title}</h3>
                    <p>{task.desc}</p>
                    <p><strong>Date limite :</strong> {task.deadline}</p>
                    <button onClick={() => deleteTask(index)}>Supprimer</button>
                </li>
            ))}
        </ul>
    </div>
);
const [error, setError] = useState("");

const addTask = () => {
    if (!newTask.trim() || !description.trim() || !deadline) {
        setError("Tous les champs sont obligatoires !");
        return;
    }
    setTasks([...tasks, { title: newTask, desc: description, deadline }]);
    setNewTask("");
    setDescription("");
    setDeadline("");
    setError(""); // Réinitialiser l'erreur
};

return (
    <div className="App">
        <h1>To-Do List</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
            <input
                type="text"
                placeholder="Titre de la tâche..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <textarea
                placeholder="Description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
            />
            <button onClick={addTask}>Ajouter</button>
        </div>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    <h3>{task.title}</h3>
                    <p>{task.desc}</p>
                    <p><strong>Date limite :</strong> {task.deadline}</p>
                    <button onClick={() => deleteTask(index)}>Supprimer</button>
                </li>
            ))}
        </ul>
    </div>
);
export default App;
