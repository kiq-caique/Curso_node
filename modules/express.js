const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("aplication/html");
  res.status(200).send("<h1>Hello world</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Caique",
      email: "caique@gmail.com",
    },
    {
      name: "Danilo",
      email: "danilo@gmail.com",
    },
  ];

  res.status(200).json(users);
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
