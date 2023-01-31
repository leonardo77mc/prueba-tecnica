const express = require('express');
const applyEndpoints = require('./endpoints');
const applyMiddlewares = require('./middlewares');

/**
 * Create server
 * @param {db:{initDB, populateDB, watchDB, deleteDB, sequelize, Sequelize}}
 * @return {Promise<*|Express>}
 */
const createExpressServer = async app => {
	const server = express();
	applyMiddlewares(server, app);
	applyEndpoints(server, app);

    await app.db.initDB();
    await app.db.populateDB();
    await app.db.watchDB();

	server.get('/', async (req, res) => {
		if(process.env.NODE_ENV === 'develop'){
				res.send('Test Enviroment');
		} else {
		    res.sendStatus(200);
		}
    });

	return server;
};

module.exports = createExpressServer;