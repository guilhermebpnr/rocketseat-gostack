import React, {useState} from 'react';

import './App.css';
import backgroundImage from './assets/background.jpeg';

import Header from './components/Header';

export default function App() {
    const [projects, setProjects] = useState(['Project 1', 'Project 2']);

    function handleAddProject() {
        setProjects([...projects, `Project ${Date.now()}`])
        console.log(projects);
    }

    return (
        <>
            <Header title="My React App" />

            <img src={backgroundImage} width="800"/>

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Add Project</button>
        </>
    );
}