/*const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write(`
        <html>
        <body>
        <nav>
        <a href= "/">Home</a>
        <a href = "/about">About</a>
        <a href = "/contact">Contact</a>
        </nav>
        <h1>Home</h1>
        </body>
        </html>
        `)
        res.end()
    }
    else if (req.url === "/about") {
        res.write(`
        <html>
        <body>
        <nav>
        <a href= "/">Home</a>
        <a href = "/about">About</a>
        <a href = "/contact">Contact</a>
        </nav>
        <h1>About</h1>
        </body>
        </html>
        `)
        res.end()
    }
    else if (req.url === "/contact") {
        res.write(`
        <html>
        <body>
        <nav>
        <a href= "/">Home</a>
        <a href = "/about">About</a>
        <a href = "/contact">Contact</a>
        </nav>
        <h1>Contact</h1>
        </body>
        </html>
        `)
        res.end()
    }
    res.statusCode = 404
    res.write('<h1>Page Not Found <a href="/">Try Again</a></h1>')
    res.end()
})

const port = process.env.PORT || 3000

server.listen(port, ()=> {console.log(`listening on port ${port}`)})
*/

const express = require('express')
const app = express()

app.get ('/', (req, res, next) => {
    res.send(`
        <html>
        <body>
        <nav>
        <a href= "/">Home</a>
        <a href = "/about">About</a>
        <a href = "/contact">Contact</a>
        </nav>
        <h1>Home</h1>
        </body>
        </html>
        `)
})

app.get ('/about', (req, res, next) => {
    res.send(`
        <html>
        <body>
        <nav>
        <a href= "/">Home</a>
        <a href = "/about">About</a>
        <a href = "/contact">Contact</a>
        </nav>
        <h1>About</h1>
        </body>
        </html>
        `)
})

app.get ('/contact', (req, res, next) => {
    res.send(`
        <html>
        <body>
        <nav>
        <a href= "/">Home</a>
        <a href = "/about">About</a>
        <a href = "/contact">Contact</a>
        </nav>
        <h1>Contact</h1>
        </body>
        </html>
        `)
})
const port = process.env.PORT || 3000
app.listen(port, ()=> {console.log(`listening on port ${port}`)})
