'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const ticTacToe = require('./gameEngine');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events.js');

// On Document ready
$(() => {
  $('#user-destroy').on('submit', authEvents.onDeleteUser);
  $('#edit-user').on('submit', authEvents.onPatchUser);
  $('#add-user').on('submit', authEvents.onPostUser);
});

// i need a to be able to click on an id within the class gameboard, which inserts the token and disables the click.
const addHandlers = (user, count) => {
  $('.gameboard').find('div').on('click',function () {
    $(this).text(user);
    count++;
  });
};
addHandlers();


module.exports = {
  addHandlers,
};
