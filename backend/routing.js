const fs = require('fs');


const requestHandler = (req, res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html> <form enctype="multipart/form-data" action = "/message" method = "POST" > <input type = "text" name = "message"><input type = "submit" name = "Send"> </form> </html>');
        return res.end();
    }
    if(url == '/message' && method == "POST"){
        // fs.writeFileSync("Hello.txt", "I am Harish B");
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const bodyParsed = Buffer.concat(body).toString();
            const msg = bodyParsed.split("=");
            fs.writeFileSync("Harish.txt", msg[1]);
            // fs.writeFileSync("Harish.txt", mg[1]);
        })
        res.setHeader('Location', '/');
        res.statusCode = 302;
        return res.end();
    }
};

module.exports = requestHandler;