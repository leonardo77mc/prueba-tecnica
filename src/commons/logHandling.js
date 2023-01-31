'use strict';
const log4js = require('log4js');
const logger = log4js.getLogger();

/**
 * Metodo para registrar un log de acuerdo al nivel debug, error, trace o info.
 * @param {string} level
 * @param {string} message
 */
function registerLog(level, message) {
    logger.level = level;
    logger[level](message);
}

module.exports = registerLog;
