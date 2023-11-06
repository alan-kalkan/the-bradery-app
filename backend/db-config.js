const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "127.0.0.1", //DB_HOST, DB_USER, etc = ce qui a été mis dans .env
  user: "root",
  password: "alankalkan",
  database: "the-bradery-test",
  port: 3306,
});
//Vérification de la connexion

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données :", err);
    throw err;
  }
  console.log("Connecté à la base de données MySQL !");
});

module.exports = connection;
