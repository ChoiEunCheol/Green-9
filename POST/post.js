const http = require('http');
const fs = require('fs');
// 편리한 사용을 위해 url 내장 모듈을 사용했다.
const url = require('url');


const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
  
    console.log("어떤 요청이 들어오는지 확인", "url -> ", req.url, "method -> ",  req.method);


  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('./post.html',(err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })} 
    else if (req.method === "GET" && parsedUrl.pathname === "/login") {
        // 해당 조건식은 사용자가 입력 요청이 들어오면 실행된다.
        // 사용자와 '자동화된 서버'의 상호작용 중 대표적인 사례
        console.log("패쓰네임 -> ", parsedUrl.pathname);
        console.log("form 입력으로부터 받은 데이터 확인 -> ", parsedUrl.query);
        console.log("form 입력으로부터 받은 데이터 확인 -> ", parsedUrl.query.name);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("login success!!");
    
      } 
    else {
        res.writeHead(404);
        res.end('Not Found');
      }
    
    });
    
    const PORT = 3000;
    server.listen(PORT, () => {
      console.log(`cli 창에서 컨트롤 누른후  옆에 포트 누르면 편리하게 확인 -> http://localhost:${PORT}/`);
    });