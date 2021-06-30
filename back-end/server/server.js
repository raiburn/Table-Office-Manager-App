const express = require('express');
const app = express();
const cors = require('cors');
const { corsOptions } = require('../configs/corsConfig.js');
const bodyParser = require('body-parser');
const pkg = require('../package.json');
const routes = require('../routes');
const mongoose = require('mongoose');
const config = require('../configs/config.js');
const jwt = require('jsonwebtoken');
const authController = require('../controllers/Users');
const errorHandler = require('../middlewars/error');

const { port, dbUrl, llave } = config;
app.set('config', config);
app.set('pkg', pkg);
// mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify:false});
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;
//  console.log(db);
db.on('error', console.error.bind(console, 'Connection error:')); // enlaza el track de error a la consola (proceso actual)
db.once('open', console.warn.bind(console, 'MongoDB is connected'));

app.use(express.urlencoded({ extended:false}));
app.use(express.json());
app.use(cors(corsOptions));
//app.use('/api', routes);
app.set('llave', llave);

//login endpoint
// app.post('/login', async (req, res) => {
//   try{
//       const login = await authController.Login(req, res);
//       const body = req.body;
//       //if login return trye return a token and the info from the user       
//       if(login.data ===true){
//           const payload = {
//               id : login._id,
//               username: body.username,
//               check:  true
//           };
//           const token = jwt.sign(payload, app.get('llave'), {
//               expiresIn: 1440
//           });
//           const info = {
//             username: body.username,
//             level: login.level
//           }
//           res.json({
//               mensaje: 'Autenticación correcta',
//               token: token,
//               info: info
//           });

//         //if login returned false it will return an error
//       }else if(login === false){
//           res.json({ mensaje: "Usuario y, o contraseña incorrectos"});
//       }else{
//           res.json({ mensaje: "Usuario no encontrado"});
//       }
//   }catch(error){
//       console.log(error);
//   }
// })

// app.get('/secure', (req, res) => {
//     var token = req.headers['authorization']
//     if(!token){
//         res.status(401).send({
//           error: "Es necesario el token de autenticación"
//         })
//     }

//     token = token.replace('', '');

//     jwt.verify(token, llave, function(err, user) {
//       if (err) {
//         res.status(401).send({
//           error: 'Token inválido'
//         })
//       } else {
//         return true;
//       }
//     })
// })

// set port, listen for requests
routes(app, (err) => {
  if (err) {
    throw err;
  }

  app.use(errorHandler);

  app.listen(port, () => {
    console.info(`App listening on port ${port}`);
  });
});
