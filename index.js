import http from 'http';
import url from 'url';
import { calculator } from './app.js';
import { numbers } from './numbers.js';

const PORT = 8000;
http.createServer((req, resp) => {
    const myUrl = url.parse(req.url);
    console.log({ myUrl });
    resp.writeHead(200, { 'content-type': 'text/html' });
    let template =
        '<h1>Introduce dos numeros para operar con el siguiente formato: ?a=6&b=3</h1>';
    if (myUrl.pathname !== '/calculator') {
        template = '<h1>Pagina no disponible</h1>';
    } else if (myUrl.query !== null) {
        console.log(myUrl.query);
        let finalNumbers = numbers(myUrl.query);
        template = calculator(finalNumbers);
    }
    resp.end(template);
}).listen(PORT);

console.log('Server running at http://localhost:' + PORT);
