const registerLog = require('../../commons/logHandling');

const _isWookieeFormat = (req) => {
    if (req.query.format && req.query.format == 'wookiee') {
        return true;
    }
    return false;
}


/**
 * Method for containing the endpoint routes for Swapi.
 * @param {core.Express} server
 * @param {db:{initDB, populateDB, watchDB, deleteDB, sequelize, Sequelize}} app
 */
const applySwapiEndpoints = (server, app) => {

    server.get('/hfswapi/test', async (req, res) => {
        const data = await app.swapiFunctions.genericRequest('https://swapi.dev/api/', 'GET', null, true);
        res.send(data);
    });

    server.get('/hfswapi/getPeople/:id', async (req, res) => {
        const id = Number(req.params['id']);
        let swPeople;
        try {
            swPeople = await app.db.swPeople.findByPk(id, {raw: true});
            if (swPeople) {
                registerLog('info', `applySwapiEndpoints > Ruta:${req.url} swPeople:${JSON.stringify(swPeople)}`);
            }
        } catch (e) {
            registerLog('error', `applySwapiEndpoints > Ruta:${req.url} > ${e.message}`);
        }
        res.status(200).json({swPeople});
    });

    server.get('/hfswapi/getPlanet/:id', async (req, res) => {
        const id = Number(req.params['id']);
        let swPlanet;
        try {
            swPlanet = await app.db.swPlanet.findByPk(id, {raw: true});
            if (swPlanet) {
                registerLog('info', `applySwapiEndpoints > Ruta:${req.url} swPeople:${JSON.stringify(swPlanet)}`);
            }
        } catch (e) {
            registerLog('error', `applySwapiEndpoints > Ruta:${req.url} > ${e.message}`);
        }
        res.status(200).json({swPlanet});
    });

    server.get('/hfswapi/getWeightOnPlanetRandom', async (req, res) => {
        res.sendStatus(501);
    });

    server.get('/hfswapi/getLogs', async (req, res) => {
        const data = await app.db.logging.findAll();
        res.send(data);
    });

}

module.exports = applySwapiEndpoints;