const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    "mongodb+srv://<username>:<password>@cluster0.ijxidaw.mongodb.net/?retryWrites=true&w=majority",
    (error) => {
      if (error) {
        return console.log(
          "Erro ao tentar se conectar com o banco de dados: ",
          error
        );
      }
      return console.log("Conexão ao banco de dados realizada com sucesso");
    }
  );
};

module.exports = connectToDatabase;
