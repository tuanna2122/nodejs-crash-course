// const http = require('http');

// const HOSTNAME = process.env.HOSTNAME || 'localhost';
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain');
//     response.end('Hello Wordl!');
// });

// server.listen(PORT, HOSTNAME, () => {
//     console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
// });

// console.log(__dirname);
// console.log(__filename);
// const { readFileSync, readFile } = require('fs');

// try {
//     const data = readFileSync('hi.txt', 'utf8');
//     console.log(data.toString());
// } catch (err) {
//     console.error(err);
// }

// console.log('Log from Outside');

// const Person = require('./person');

// const person1 = new Person('John Doe', 30);
// person1.greeting();

// const person2 = new Person('AJ Hoge', 32);
// person2.greeting();

// const { writeFileSync, writeFile } = require('fs');

// const newContent = '\nThis is some new text';

// writeFile('hi.txt', newContent, { flag: 'a' }, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Content written!');
// });

// const { appendFile } = require('fs');

// const newContent = '\nThis is some new text';

// appendFile('hi.txt', newContent, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Content written!');
// });

// const { rename } = require('fs');

// rename('hi.txt', 'hello.txt', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File renamed!');
// });

// const { unlink } = require('fs');

// unlink('hello.txt', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File deleted!');
// });

// import { addNums } from './addNums.js';

// const sum = addNums(6, 6);

// console.log(sum);

const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const server = http
    .createServer((req, res) => {
        res.setHeader('Content-Type', 'text/html');

        let path = './';
        switch (req.url) {
            case '/':
                path += 'index.html';
                res.statusCode = 200;
                break;
            case '/about':
                path += 'about.html';
                res.statusCode = 200;
                break;
            default:
                // res.setHeader('Location', '/');
                // res.statusCode = 301;
                path += '404.html';
                res.statusCode = 404;
                break;
        }

        fs.readFile(path, (err, data) => {
            if (err) {
                console.error(err);
                res.end();
            } else {
                res.end(data);
            }
        });
    });
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
