const http = require("http");
const url = require("url");

const server = http.createServer((req,res) => {
    // console.log("URL로 최초접속하는 트랜잭션 확인하기")
    console.log(req.url);
    // console.log("URL로 최초접속하는 요청 유형 확인하기")
    // console.log(req.method);
    
    function aaa() {
        res.write(`
    <head></head>
    <body>
    <h2> ${data.id} </h2>
    <ul>
      <li><a href="/?id=가">가</a></li>
      <li><a href="/?id=나">나</a></li>
      <li><a href="/?id=다">다</a></li>
    </ul>
    <body>   
    `);
    }
    
    let data = url.parse(req.url,true).query;

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    aaa();
    res.end();

    switch (true) {
        case req.url === '/?id=%EA%B0%80' : 
        console.log("1");
        break;

        default :
        console.log("2");
        break;
    }
});



server.listen(3000, () =>{
    console.log(`server running : http://localhost:3000/`);
})