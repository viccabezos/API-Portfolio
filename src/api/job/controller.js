const getAll = require('./getAll');
const getOne = require('./getOne');
const post = require('./post');
const getFormation = require('./getFormation');
const getCompany = require('./getCompany');

const controller = {
  getAll,
  getOne,
  post,
  getFormation,
  getCompany,
};

module.exports = controller;
