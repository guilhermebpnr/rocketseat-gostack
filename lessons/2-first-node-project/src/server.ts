import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.listen(3333, () => {
    const obj = {
        'server is': '🏃‍ running',
        '  on port': 3333,
    };
    console.table(obj);
});
