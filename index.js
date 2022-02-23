import http from 'http';
import url from 'url';
import { calculator } from './app.js';

const PORT = 8000;
http.createServer((req, resp) => {
    const myUrl = url.parse(req.url);
    console.log({ myUrl });
    resp.writeHead(200, { 'content-type': 'text/html' });
    let template = '<h1>Este servidor dice "Hola Mundo"</h1>';
    if (myUrl.pathname !== '/' && myUrl.pathname !== '/calculator') {
        template = '<h1>Pagina no disponible</h1>';
    } else if (myUrl !== null) {
        let finalNumbers = myUrl.query.replaceAll('=', '');
        let arr = finalNumbers.split('&');
        let numbers = [];
        let numberOne = arr[0].replaceAll('a', '');
        numbers.push(numberOne);
        let numberTwo = arr[1].replaceAll('b', '');
        numbers.push(numberTwo);
        template = calculator(numbers);
    }
    resp.end(template);
}).listen(PORT);

console.log('Server running at http://localhost:' + PORT);
