const getAll = require('./getAll');
const getOne = require('./getOne');
const post = require('./post');
const getStacks = require('./getStacks');
const getPictures = require('./getPictures');
const getFormation = require('./getFormation');

const controller = {
  getAll,
  getOne,
  post,
  getStacks,
  getPictures,
  getFormation,
};

module.exports = controller;
