// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTask = () => {
        if (title && description) {
            const newTask = { title, description };
            setTasks([...tasks, newTask]);
            setTitle("");
            setDescription("");
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Titre de la tâche..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button className="add-btn" onClick={addTask}>
                    Ajouter
                </button>
            </div>
            <div>
                {tasks.map((task, index) => (
                    <div className="task-item" key={index}>
                        <h3 className="task-title">{task.title}</h3>
                        <p className="task-desc">{task.description}</p>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>
                            Supprimer
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;




