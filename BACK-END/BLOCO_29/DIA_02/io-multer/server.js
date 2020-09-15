const express = require("express");
const multer = require("multer");

const app = express();

/* Definindo nossa pasta pública */
app.use(express.static(__dirname + "/uploads"));

/* Cria uma instância do multer configurada */
const upload = multer({ dest: "uploads" });

app.get("/ping", (req, res) => res.send("pong!"));

app.post('/files/upload', upload.single('file'), (req, res) =>
  res.send().status(200)
);

const port = 3000;

app.listen(port, () => console.log(`Running at port: ${port}`));
