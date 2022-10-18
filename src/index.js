const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const { response } = require('express');


// create and config server
const server = express();
server.use(cors());
server.use(express.json());

//Set EJS.
server.set('view engine', 'ejs');

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// database

const usersDb = new Database('./src/db/users.db', { verbose: console.log });

server.post('/signIn', (req, res) => {
  const userData = req.body;
  const userEmail = req.body.email;

  const queryEmail = usersDb.prepare(`SELECT * FROM users WHERE email = ?`);
  const user = queryEmail.get(userEmail);
  console.log(user)

  const result = {};

  if (user) {
    result.success = false;
    result.errorMessage = "Usuaria ya existente";

  } else {
    const query = usersDb.prepare(`INSERT INTO users (email, password) VALUES (?, ?)`)
    const queryResult = query.run(req.body.email, req.body.password);
    result.success = true;
    result.userId = queryResult.lastInsertRowid;
  };

  res.json(result)
});

const staticServer = './src/public-react/';
server.use(express.static(staticServer));