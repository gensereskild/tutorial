const http = require("http")

const server = http.createServer((req,res)=>{
if(req.url=="/"){
    res.end("welcome to our home page")
}
if(req.url=="/about"){
    res.end("here is our short about page")
}
res.end(`
<h1>Oops!</h1>
<p>we can't seem to fin d the page <p>
<a href="/">back home </a>`)

})

server.listen(5000)