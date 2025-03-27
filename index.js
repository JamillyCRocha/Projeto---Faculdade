require('dotenv').config()

 console.log("rodando o arquivo node")

 var mysql = require('mysql2');

var con = mysql.createConnection({
  host: process.env.END_BANCO,
  user: process.env.USUARIO_BANCO,
  password: process.env.SENHA_BANCO
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
