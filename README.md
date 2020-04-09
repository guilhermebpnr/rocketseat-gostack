# Rocketseat GoStack Bootcamp

Immersive training in Node.js, React and React Native.

## Getting started

### Learning 

- Take notes
- Don't skip any steps
- Make use of todo lists
- Use the pomodoro technique
- Teach someone next to you
- Write about what you've learnt, like a blog post

### Personal Projects

- Watch for the needs of people next to you
- Make a clone of an interesting app
- Get some [inspiration here](https://github.com/florinpop17/app-ideas)
- Publish your app ASAP

## Development Environment

- VS Code
- React Developer Tools for Chrome


## Level 1

### Backend with Node.js

- Implementation of business rules
- Integration with third-parties
- Management of routes
- It's a plaform, not a language
- Built on top of V8 Engine
- Event loop architecture
  - Call-stack based
- Single-threaded
  - C++ based multi-threading
- Non-blocking I/O: the end of the request/response processing does not end the connection. It depends on the WebSocket protocol

#### NPM and Yarn

- Package managers for installing third-party libraries
- Yarn is faster and more functional
  - Yarn workspaces for sharing libraries among projects

#### Node Frameworks

- ExpressJS
  - Unopiniated
  - Often used for implementing microservices
- AdonisJS and NestJS
  - Opiniated frameworks

### Rest API Fundamentals

#### How does it work?

- Client makes a request
- Server returns a data structure as a response
- Client receives the response and processes it as needed

#### HTTP Methods

- GET /users
- GET /users/:id
- POST /users
  - Request body
  - HTTP Headers
- PUT /users/:id
  - Request body
- PATCH
- DELETE /users/:id

#### Benefits

- Multiple clients to the same service
- Standardized communication

#### HTTP Codes

- 1xx: Informational
- 2xx: Success
  - 200: Success (returning lists, e.g.)
  - 201: Created
- 3xx: Redirection
  - 301: Moved Permanently
  - 302: Moved
- 4xx: Client Error
  - 400: Bad Request
  - 401: Unauthorised
  - 404: Not Found
- 5xx: Server Error
  - 500: Internal Server Error

### Creating a Node project

1. Initialise the project folder: 
   ```shell
   $ yarn init -y
   ```
2. Create basic folder structure
    ```shell
    /src
        /index.js
    /package.json
    ``` 
3. Add the Express framework: `$ yarn add express`
   - Manages routes and middleware
4. Add Express framework to the app
   ```js
   const express = require('express');
   const app = express();
   app.listen(3333, () => {
    console.log('Backend started.')
   });
   ```
5. Execute the app: 
   ```shell
   $ node src/index.js
   ```
### Adding routes

#### GET

Text:

```js
app.get('/projects', (request, response) => {
    return response.send('Hello World');
})
```

Json object:

```javascript
app.get('/', (request, response) => {
    return response.json({ 
        message: 'Hello World',
    });
})
```

### Configuring Nodemon

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

```shell
$ yarn add nodemon -D`
```

- -D adds it as a development dependency

#### Executing it

```shell
$ yarn nodemon src/index.js
```

or

1. Add this to *package.json*:
   ```json
   "scripts": {
       "dev": "nodemon src/index.js"
   },
   ```
2. Execute it: `yarn dev`

Alternatively, 

1. Change 
   
   ```json
   "main": "index.js",
   ```

   to 
   
   ```json
   "main": "src/index.js",
   ```

2. And add

   ```json
   "scripts": {
       "dev": "nodemon"
   },
   ```

    as nodemon will execute the *main* file by default.

### Using Insomnia

#### Adding environments

1. Click on **No Environment**
2. Click on 🔧**Manage Environments**
3. Beside **Sub Environments**, click on the ➕ icon and then choose 👁**Environment**
4. In the editor, add a variable in the JSON format, like:
    ```json
    {
       "base_url": "http://localhost:3333"
    }
    ```
5. Close the **Manage Environments** window
6. Click inside the URL field and type **Ctrl+Space**
7. Select the variable that was just created

### Parameter Types

#### Query params

Used for filtering and paging, e.g.
  
```json
?name=value&name1=value1
```

> Tip: Inside Insomnia, we can use the *Query* tab.

To retrieve the arguments inside the app:

```js
app.get('/resource', (request, response) => {
    const queryParams = request.query;
    console.log(queryParams);
    // Request URL:
    // http://localhost:3333/resource?name=value&name1=value1
    // Output:
    // { name: 'value', name1: 'value1' }
    
    const { name, name1 } = request.query;
    console.log(name);
    console.log(name1);
    // Output:
    // value
    // value1
});
```

#### Route params

Used to identify resources when updating or deleting them.

```js
app.put('/resources/:id', (request, response) => {
    const routeParams = request.params;
    const { id } = request.params;
    console.log(routeParams);
    console.log(id);

    // URL: http://localhost:3333/resource/1
    // Output:
    // { id: 1 }
    // 1
});
```

#### Request body

Used to send the content when creating or editing a resource by sending a JSON object.

In order to use this with Express, the following must be added before the routes declarations:

```js
app.use(express.json());
```

To test it in Insomnia, pick the *post*/*put* method, for example, as the HTTP request method and them pick *JSON* as the **Body** type, and insert a JSON object with fields corresponding to the resource to be created/updated.

The *body* that was sent inside the HTTP request can then be retrieved like so:

```js
app.post('/resources', (request, response) => {
    const body = request.body;
    // body will be an object containing all the properties defined in the JSON object that was passed
})
```

## Useful Imports

```js
const { uuid } = require('uuidv4');
```

## Useful Methods

- [str.includes(searchString[, position])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)