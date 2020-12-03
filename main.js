const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    fs.readFile('src/html/index.html', (error, data) => {
        if (error) {
            fs.readFile('src/html/404.html', (e, d) => {
                if (e) {
                    res.writeHead(404);
                    res.write('Error: Page not Found')
                }
                else {
                    res.write(d);
                }
            })
        }
        else {
            res.write(data);
        }
    })
    res.end();
})

server.listen(port, error => {
    if (error)
        console.error(`Something went wrong:\n${error}`)
    else
        console.log(`Server is Listenening on Port ${port}`)
});