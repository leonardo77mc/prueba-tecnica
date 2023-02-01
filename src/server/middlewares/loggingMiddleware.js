const registerLog = require('../../commons/logHandling');

/**
 * Middleware and data record ip, headers, url of origin.
 * @param {{initDB, populateDB, watchDB, deleteDB, sequelize, Sequelize}} db
 * @return {function(*, *, *): void}
 */
const loggingMiddleware = (db) =>
    async (req, res, next) => {
        const ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim();
        const headers = JSON.stringify(req.headers);
        const originalUrl = req.originalUrl;

        try {
            registerLog('debug', `loggingMiddleware > info:
                    Origin record for the request ip:${ip}, headers:${headers}, originalUrl:${originalUrl}`);
            // Persist this info on DB
            await db.logging.create({action: originalUrl, header: headers, ip});
        } catch (e) {
            registerLog('error', `loggingMiddleware > error: ${e.message}`);
        }
        next();
    }

module.exports = loggingMiddleware;