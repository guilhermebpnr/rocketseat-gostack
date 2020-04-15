import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        // setProjects([...projects, `Project ${Date.now()}`])
        const response = await api.post('projects', {
            title: 'MY BRAND NEW PROJECT',
            owner: 'Guilherme'
        });

        setProjects([...projects, response.data]);
    }

    return (
        <>
            <Header title="My React App" />
            <ul>
                {projects.map(project => 
                    <li key={project.id}>{project.title}</li>
                )}
            </ul>
            <button type="button" onClick={handleAddProject}>Add Project</button>
        </>
    );
}