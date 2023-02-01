const db = require('./db');
const swapiFunctions = require('./swapiFunctions');
const {CommonPeople} = require('./People/commonPeople');
const {Planet} = require('./Planet/Planet');

module.exports = {
    db,
    swapiFunctions,
    CommonPeople,
    Planet
}