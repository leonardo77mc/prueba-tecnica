'use strict';
const log4js = require('log4js');
const logger = log4js.getLogger();

/**
 * Method to register a log according to the debug, error, trace or info level.
 * @param {string} level
 * @param {string} message
 */
function registerLog(level, message) {
    logger.level = level;
    logger[level](message);
}

module.exports = registerLog;
