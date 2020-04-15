const express = require('express');
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4');

const app = express();
app.use(express.json());
app.use(cors());

const logResquests = (request, response, next) => {
    const { method, url } = request;
    console.log(method.toUpperCase(), url);
    return next();
}

const validateProjectId = (request, response, next) => {
    const { id } = request.params;

    if (!isUuid(id)) {
        return response.json({ error: 'The project ID is invalid.' });
    }

    return next();
}

app.use(logResquests);
app.use('/projects/:id', validateProjectId);

const projects = [];

app.get('/projects', (request, response) => {
    const { title } = request.query;

    results = title
        ? projects.filter(project => project.title.includes(title))
        : projects;

    return response.json(results);
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;
    const project = { id: uuid(), title, owner };

    projects.push(project);

    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const { title, owner } = request.body;
    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return response
            .status(400)
            .json({ error: 'Project not found.' })
    }

    const project = {
        id,
        title,
        owner
    };

    projects[projectIndex] = project;

    return response.json(project);
})

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return response.status(400).json({ error: 'Project not found.' });
    }

    projects.splice(projectIndex, 1);

    return response.status(204).send();
});

app.listen(3333, () => {
    console.log('🚀 Backend started.')
});