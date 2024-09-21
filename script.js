const http = require('http')

const server = http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about.html">About</a></li>
                <li><a href="./dashboard.html">Dashboard</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    <section>
        <h2>Welcome to My Website</h2>
        <p>This is a brief introduction to my website or application.</p>
        <a href="./login.html" class="button">Login</a>
        <a href="./register.html" class="button">Register</a>
    </section>
        <footer>
            <div class="footer-container">
                <p>&copy; 2024 [Company Name]. All rights reserved.</p>
                <p>Contact us: <a href="mailto:info@company.com">info@company.com</a> | Phone: (123) 456-7890</p>
                <p>Follow us on: 
                    <a href="https://www.facebook.com">Facebook</a> | 
                    <a href="https://www.twitter.com">Twitter</a> | 
                    <a href="https://www.linkedin.com">LinkedIn</a>
                </p>
            </div>
    </footer>
    <script src="./js/script.js"></script>
</body>
</html>`)
   
    res.end()
})

server.listen(3060, ()=>{
    console.log("Server is running @ http://localhost:3060")
})