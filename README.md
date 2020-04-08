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