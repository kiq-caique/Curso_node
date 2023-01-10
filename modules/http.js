const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>home page<h1>");
  }
  if (req.url === "/user") {
    const users = [
      {
        name: "Carlos",
        email: "carlos@gmail.com",
      },
      {
        name: "Camila",
        email: "camila@gmail.com",
      },
    ];
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}!`));
