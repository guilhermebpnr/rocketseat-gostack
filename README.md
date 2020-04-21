###### <span id="top">[go to bottom ⇣](#bottom)</span>

# Rocketseat GoStack Bootcamp

Immersive training in Node.js, React and React Native.

**Table of Contents**
- [Rocketseat GoStack Bootcamp](#rocketseat-gostack-bootcamp)
- [Getting started](#getting-started)
  - [Learning](#learning)
  - [Personal Projects](#personal-projects)
- [Development Environment](#development-environment)
- [Level 1.1 - Backend with Node.js](#level-11---backend-with-nodejs)
    - [NPM and Yarn](#npm-and-yarn)
    - [Node Frameworks](#node-frameworks)
  - [Rest API Fundamentals](#rest-api-fundamentals)
    - [How does it work?](#how-does-it-work)
    - [HTTP Methods](#http-methods)
    - [Benefits](#benefits)
    - [HTTP Codes](#http-codes)
  - [Creating a Node project](#creating-a-node-project)
  - [Adding routes](#adding-routes)
    - [GET](#get)
  - [Configuring Nodemon](#configuring-nodemon)
    - [Executing it](#executing-it)
  - [Using Insomnia](#using-insomnia)
    - [Adding environments](#adding-environments)
  - [Parameter Types](#parameter-types)
    - [Query params](#query-params)
    - [Route params](#route-params)
    - [Request body](#request-body)
  - [Middleware](#middleware)
    - [Calling a Middleware](#calling-a-middleware)
    - [Passing on the execution](#passing-on-the-execution)
    - [Interrupting the execution inside the Middleware](#interrupting-the-execution-inside-the-middleware)
  - [Useful Imports](#useful-imports)
  - [Useful Methods](#useful-methods)
- [Level 1.2 - Frontend with ReactJS](#level-12---frontend-with-reactjs)
  - [Initialising the project](#initialising-the-project)
    - [Create folder structure](#create-folder-structure)
    - [Add React Modules](#add-react-modules)
  - [Webpack, Babel and Loaders](#webpack-babel-and-loaders)
    - [Configuring Babel](#configuring-babel)
    - [Running Babel CLI](#running-babel-cli)
    - [Configuring Webpack](#configuring-webpack)
    - [Running Webpack](#running-webpack)
    - [Installing Webpack Development Server](#installing-webpack-development-server)
    - [Running Webpack Development Server](#running-webpack-development-server)
  - [Components](#components)
    - [JSX Hello World](#jsx-hello-world)
    - [Component Hello World](#component-hello-world)
    - [Basic Component](#basic-component)
    - [Fragments](#fragments)
    - [Properties](#properties)
    - [State Variables](#state-variables)
  - [Useful VSCode Configurations](#useful-vscode-configurations)
  - [Importing CSS and Images](#importing-css-and-images)
  - [Handling files](#handling-files)
  - [Fetching data from the API](#fetching-data-from-the-api)
    - [Axios](#axios)
    - [Backend: Cors](#backend-cors)
    - [useEffect](#useeffect)
    - [Fetching the data](#fetching-the-data)
  - [Posting data to the API](#posting-data-to-the-api)
  - [Additional configurations](#additional-configurations)
- [Level 1.3 - Mobile App with React Native](#level-13---mobile-app-with-react-native)
  - [Setting up the SDK](#setting-up-the-sdk)
  - [Initializing project](#initializing-project)
  - [Running on Mac](#running-on-mac)
  - [Hello World App](#hello-world-app)
  - [React Native Tags](#react-native-tags)
  - [Accessing the API](#accessing-the-api)
    - [Using Axios](#using-axios)
    - [Which IP should I use to connect to the device/emulator?](#which-ip-should-i-use-to-connect-to-the-deviceemulator)
    - [FlatList Example](#flatlist-example)
    - [TouchableOpacity Example](#touchableopacity-example)
- [Typescript](#typescript)
  - [Setting up a Node.js project](#setting-up-a-nodejs-project)
  - [Node.js Hello World app](#nodejs-hello-world-app)
  - [Running the app](#running-the-app)
  - [Hello World using types](#hello-world-using-types)
  - [Interfaces](#interfaces)
- [First project using Node.js](#first-project-using-nodejs)
  - [Structure and Patterns](#structure-and-patterns)
    - [Setting up the structure](#setting-up-the-structure)
    - [.editorconfig](#editorconfig)
    - [ESLint](#eslint)
    - [Importing Typescript files](#importing-typescript-files)

# Getting started

## Learning 

- Take notes
- Don't skip any steps
- Make use of todo lists
- Use the pomodoro technique
- Teach someone next to you
- Write about what you've learnt, like a blog post

## Personal Projects

- Watch for the needs of people next to you
- Make a clone of an interesting app
- Get some [inspiration here](https://github.com/florinpop17/app-ideas)
- Publish your app ASAP

# Development Environment

- VS Code
- React Developer Tools for Chrome


# Level 1.1 - Backend with Node.js

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

### NPM and Yarn

- Package managers for installing third-party libraries
- Yarn is faster and more functional
  - Yarn workspaces for sharing libraries among projects

### Node Frameworks

- ExpressJS
  - Unopiniated
  - Often used for implementing microservices
- AdonisJS and NestJS
  - Opiniated frameworks

## Rest API Fundamentals

### How does it work?

- Client makes a request
- Server returns a data structure as a response
- Client receives the response and processes it as needed

### HTTP Methods

- GET /users
- GET /users/:id
- POST /users
  - Request body
  - HTTP Headers
- PUT /users/:id
  - Request body
- PATCH
- DELETE /users/:id

### Benefits

- Multiple clients to the same service
- Standardized communication

### HTTP Codes

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

## Creating a Node project

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
## Adding routes

### GET

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

## Configuring Nodemon

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

```shell
$ yarn add nodemon -D`
```

- -D adds it as a development dependency

### Executing it

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

## Using Insomnia

### Adding environments

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

## Parameter Types

### Query params

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

### Route params

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

### Request body

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

## Middleware

The concept of Middleware is an essential part of the Express framework. It is basically a request interceptor. It's a function that takes a `request`, a `response` and a `next` as parameters and, thus, has the following format:

```js
function myMiddleware(request, response, next) {
  ...
}
```

A middleware can completely interrupt a request or it can alter data from the request and return a response. It can also call the next middleware to be executed.

### Calling a Middleware

Once defined, a middleware can be called in two ways.

#### Globaly

```js
app.use(myMiddleware);
```

#### Targeted

```js
app.use('/route', myMiddleware);
```

#### Locally

```js
app.get('/route', myMiddleware1, myMiddleware2, ... , (request, response) => { ... });
```

As suggested, the methods called in the HTTP routing methods (*.get, .post, .put*, etc.) are themselves middlewares.

### Passing on the execution

```js
function myMiddleware(request, response, next) {
  ...
  return next();
}
```

### Interrupting the execution inside the Middleware

```js
function myMiddleware(request, response, next) {
  ...

    if (...) {
      // At this point the request is interrupted
      return response
        .status(400)
        .json({ error: 'Some error.' });
    }

  return next();
}
```

## Useful Imports

```js
const { uuid, isUuid } = require('uuidv4');
```

## Useful Methods

- [str.includes(searchString[, position])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

# Level 1.2 - Frontend with ReactJS

## Initialising the project

```shell
$ yarn init -y
```

### Create folder structure

```
/public
  index.html
/src
  index.js
package.json
babel.config.js
```

### Add React Modules

```shell
$ yarn add react react-dom
```

React DOM must be added when developing web apps.

## Webpack, Babel and Loaders

babel-loader, css-loader, image-loader...

```shell
$ yarn add @babel/core @babel/preset-env @babel/preset-react @babel/cli babel-loader webpack webpack-cli
```

### Configuring Babel

> [Babel](http://www.babeljs.io) > Docs > Configuring Babel

babel.config.js

```js
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ]
}
```

### Running Babel CLI

```shell
$ yarn babel file.js --out-file file2.js
```

### Configuring Webpack

webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: {
    path: path.resolve(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
};
```

### Running Webpack

```shell
$ yarn webpack [--mode development]
```

### Installing Webpack Development Server

```shell
$ yarn add webpack-dev-server -D
```

Then add this to the top-level in webpack.config.js:

```js
devServer: {
  contentBase: path.resolve(__dirname, 'public')
},
```

### Running Webpack Development Server

```shell
$ yarn webpack-dev-server --mode development
```

## Components

In ReactJS, a component is a function that returns JSX.

### JSX Hello World

/public/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReactJS</title>
</head>
<body>
    <div id="app"></div>
    <script src="bundle.js"></script>
</body>
</html>
```

index.js

```js
import React from 'react';
import { render } from 'react-dom';

render(
    <h1>Hello World</h1>, // JSX
    document.getElementById('app')
);
```

### Component Hello World

/public/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReactJS</title>
</head>
<body>
    <div id="app"></div>
    <script src="bundle.js"></script>
</body>
</html>
```

App.js

```js
import React from 'react';

export default function App() {
    return <h1>Hello People</h1>; //JSX
}
```

index.js

```js
import React from 'react';
import { render } from 'react-dom';

import App from './App';

render(
    <App />, 
    document.getElementById('app')
);
```

### Basic Component

/components/Header.js

```js
import React from 'react';

export default function Header() {
    return (
        <header>
            <h1>Component Hello World</h1>
        </header>
    );
}
```

App.js

```js
import React from 'react';

import Header from './components/Header';

export default function App() {
    return <Header />;
}
```

### Fragments

A fragment is an XML tag with no name. It is not rendered in the final HMTL document and can be used to nest multiple, same-level components.

```js
export default function MyComponent() {
  return (
    <>                      // <- Fragment tag
      <Component1 />
      <Component2 />
    </>
  );
}
```

### Properties

Properties can be passed inside JSX to be rendered in a component.

App.js

```js
function App() {
  return (
    <MyComponent myProperty="myValue"/>
    <MyComponent>
      <span class="a-child-tag">
        Some content.
      </span>
    </MyComponent>
  );
}
```

MyComponent.js

```js
function MyComponent(props) {
  return (
    <div>
      {properties.myProperty}
      {properties.children}
    </div>
  );
}
```

### State Variables

If I wanna have something showing on my screen and then be able to change it, I need to use a state variable.

#### Declaring it

```js
import { useState } from 'react';
...
  const [myStateVar, setMyStateVar] = useState(valid_initial_value);
...
```

#### Changing its value

```js
setMyStateVar(new_value);
```

It can then be used on the app like any traditional variable.

## Useful VSCode Configurations

```json
"emmet.syntaxProfiles": { "javascript": "jsx" },
"emmet.includeLanguages": { "javascript": "javascriptreact" },
```

## Importing CSS and Images

```shell
$ yarn add css-loader style-loader
```

webpack.config.js

```js
module: {
  rules: {
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        { loader: 'css-loader'},
        { loader: 'style-loader'},
      ]
    }y
  }
}
```

## Handling files

```shell
$ yarn add file-loader
```

webpack.config.js

```js
module: {
  rules: [
    {
      test: /.*\.(gif|png|jpe?g)$/i,
      use: { loader: 'file-loader' }
    },
  ]
},
```

## Fetching data from the API

### Axios

Axios will allow us to access the API though the HTTP methods.

```shell
$ yarn add axios
```

/services/api.js

```js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;
```

### Backend: Cors

The Cors module must be added to the backend app to allow consumers to access the API.

```shell
$ yarn add cors
```

index.js

```js
const cors = require('cors');
...
app.use(cors());
```

### useEffect

Fires a function as soon as the component is shown, or as soon as a determinate data are changed.

### Fetching the data

```js
useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);
```

## Posting data to the API

We add this for handling async methods.

```shell
$ yarn add @babel/plugin-transform-runtime -D
```

babel.config.js

```js
plugins: [
  '@babel/plugin-transform-runtime'
]
```

Now we can post the information using Axio's *post* method inside an asynchronous function.

```js
async function handleAddProject() {
  const response = await api.post('projects', {
    title: 'Title',
    owner: 'Owner'
  });
  setProjects([...projects, response.data]);
}
```

## Additional configurations

package.json

```json
"scripts": {
  "dev": "webpack-dev-server --mode development",
  "build": "webpack --mode production"
},
```

# Level 1.3 - Mobile App with React Native

## Setting up the SDK

https://react-native.rocketseat.dev/

## Initializing project

```shell
$ react-native init dir_name
$ cd dir_name/ios
$ pod install
$ cd ..
```

## Running on Mac

```shell
$ react-native run-ios --simulator "iPhone 11 Pro Max"
```

## Hello World App

index.js

```js
import App from './src';
```

/src/index.js

```js
import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#222' />
            <View style={styles.container}>
                <Text style={styles.title}>Hello my world!</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
    },
});
```

## React Native Tags

- <></>
- View
- SafeAreaView
- Text
- ScrollText
- FlatList
- StatusBar
- TouchableOpacity

## Accessing the API

### Using Axios

```js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://my_ip:3333',
});
```

### Which IP should I use to connect to the device/emulator?

- iOS emulator: localhost
- iOS device: computer's IP
- Android emulator with adb reverse: localhost
- Androd Studio emulator: 10.0.2.2
- Android Genymotion emulator: 10.0.3.2
- Android device: computer's IP

### FlatList Example

```js
<FlatList
  style={styles.container}
  data={projects}
  keyExtractor={project => project.id}
  renderItem={({ item: project }) => (
    <Text style={styles.project}>{project.title}</Text>
  )}
/>
```

### TouchableOpacity Example

```js
<TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleAddProject}>
  <Text style={styles.buttonText}>Add Project</Text>
</TouchableOpacity>
```

# Typescript

## Setting up a Node.js project

```shell
yarn init -y
yarn add typescript -d
yarn add express
yarn add @types/express -D
yarn tsc --init
```

tsconfig.json

```json
"outDir": "./dist",
```

## Node.js Hello World app

/src/index.ts

```typescript
import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({
    message: 'Hello world =/',
}));

app.listen(3333);
```

## Running the app

```shell
yarn tsc
node dist/index.js
```

## Hello World using types

index.ts

```ts
import express from 'express';
import { helloWorld as helloWorld } from './routes';

const app = express();

app.get('/', helloWorld);

app.listen(3333);
```

routes.ts

```ts
import { Request, Response } from 'express';

export function helloWorld(request: Request, response: Response) {
    return response.json({
        message: 'Hello world',
    });
}
```

## Interfaces

/services/CreateUser.ts

```ts
interface TechObject {
    title: string;
    experience: number;
}

interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>;
    // techs: String[]
}

export default function createUser({ name, email, password }: CreateUserData) {
    const user = {
        name,
        email,
        password,
    };
    return user;
}
```

routes.ts

```ts
import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'me@email.com',
        password: '123456',
        techs: [
            'Node.js', 
            'React', 
            {title: 'Typescript', experience: 100}],
    });

    return response.json({ message: 'Hello World' })
}
```

# First project using Node.js

## Structure and Patterns

### Setting up the structure

```shell
yarn init -y
yarn add express
yarn add typescript -D
yarn tsc --init
yarn add @types/typescript -D
```

tsconfig.json

```json
"outDir": "./dist",
"rootDir": "./src",
```

```shell
yarn tsc
node dist/server.js
```

#### Setting up a dev server

```shell
yarn add ts-node-dev -D
```

package.json
```json
"scripts": {
  "dev:server": "ts-node-server --transpileOnly --ignore-watch node_modules src/server.ts"
}
```

### .editorconfig

Install the extension and then:

1. Generate the config file by right-clicking the project tree and selecting the corresponding option

2. Add some config:
    
    ```
    end_of_line = lf
    trim_trailing_whitespace = true
    insert_final_newline = true
    ```

### ESLint

```shell
yarn add eslint -D
yarn eslint --init
```

Don't forget to install the packages suggested at the end of the init script.

Also, install the VSCode ESLint extension.

Tip: the project folder should be a "root" folder in the workspace, in order for ESLint to work.

### Importing Typescript files

```shell
yarn add eslint-import-resolver-typescript
```

.eslintrc.json

```json
"rules": {
    "import/extensions": [
        "error",
        "ignorePackages",
        {
            "ts": "never"
        }
    ]
},
"settings": {
    "import/resolver": {
        "typescript": {}
    }
}
```



###### <span id="bottom">[go to top ⇡](#top)</span>
