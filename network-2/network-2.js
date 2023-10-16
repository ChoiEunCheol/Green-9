const http = require("http");
const url = require("url");

const server = http.createServer((req,res) => {
    console.log("URL로 최초접속하는 트랜잭션 확인하기")
    console.log(req.url);
    console.log("URL로 최초접속하는 요청 유형 확인하기")
    console.log(req.method);
    
    let data = url.parse(req.url,true).query;

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write("ㅇㅇ");
    res.end(data.name);
});

server.listen(3000, () =>{
    console.log(`server running : http://localhost:3000/`);
})