const {AlterUser, Login, CreateUser, DeleteUser, FindUser, UsersAll, UserSearcher } = require('../controllers/Users');

module.exports = (app, nextMain) => {
  app.put('/users/:id', AlterUser);
  app.post('/login', Login);
  app.post('/users', CreateUser);
  app.delete('/users/:id', DeleteUser);
  app.get('/users/:username', FindUser);
  app.get('/users', UsersAll);
  app.get('/search/:username', UserSearcher);
  app.get('/search/:id', UserSearcher);
  nextMain();
}

