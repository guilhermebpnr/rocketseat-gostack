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