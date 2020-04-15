import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: `Repo ${Date.now()}`,
      url: "https://github.com/Rocketseat/umbriel",
      techs: [
        "Node",
        "Express",
        "TypeScript"
      ],
      likes: 0
    });

    setRepositories([...repositories, response.data]);
  }

  async function handleRemoveRepository(id) {
    const repoIndex = repositories.findIndex(repository => repository.id === id);

    let repositoriesCopy = [...repositories];
    repositoriesCopy.splice(repoIndex, 1);
    setRepositories(repositoriesCopy);
    
    await api.delete(`repositories/${id}`);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(
          repository =>
            <li key={repository.id}>{repository.title}
              <button onClick={() => handleRemoveRepository(repository.id)}>Remover</button>
            </li>
        )}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
