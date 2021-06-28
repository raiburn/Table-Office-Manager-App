const auth = require('./Users/Auth');
const createuser = require('./Users/CreateUser');
const users = require('./Users/Users');
const finduser = require('./Users/FindUser');
const deleteuser = require('./Users/DeleteUser');
const alteruser = require('./Users/AlterUser');


module.exports = [auth, createuser, users, finduser, deleteuser, alteruser];