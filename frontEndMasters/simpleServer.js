const http = require('http')
http.createServer((req,res) => {
	res.write("My stupid server")
	res.end()
}).listen(8080)

console.log('server started listening at 8080')
