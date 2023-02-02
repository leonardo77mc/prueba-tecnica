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

        const wookieeFormat = _isWookieeFormat(req);
        const id = Number(req.params['id']);
        let swPeople;

        if (wookieeFormat) {
            // No veo la propiedad homeworld_name o homeworldName y el id en people desde la api
            swPeople = await app.swapiFunctions.genericRequest(
                `https://swapi.dev/api/people/${id}/?format=wookiee`, 'GET', null, true);
        } else {
            swPeople = await app.swapiFunctions.genericRequestById(id, app,
                'swPeople',
                'applySwapiEndpoints',
                req.url,
                'name', 'mass', 'height', ['homeworld_name', 'homeworldName'], ['homeworld_id', 'homeworldId']);
        }

        res.status(200).json({swPeople});
    });

    server.get('/hfswapi/getPlanet/:id', async (req, res) => {

        const wookieeFormat = _isWookieeFormat(req);
        const id = Number(req.params['id']);
        let swPlanet;

        if (wookieeFormat) {
            // No veo la propiedad el id en planets desde la api
            swPlanet = await app.swapiFunctions.genericRequest(
                `https://swapi.dev/api/planets/${id}/?format=wookiee`, 'GET', null, true);
        } else {
            swPlanet = await app.swapiFunctions.genericRequestById(id, app,
                'swPlanet',
                'applySwapiEndpoints',
                req.url,
                'name', 'gravity');
        }
        res.status(200).json({swPlanet});
    });

    server.get('/hfswapi/getWeightOnPlanetRandom', async (req, res) => {

        /** Esta prueba funciona correcto con 10 registros locales, para una prueba con la api de
         * swapi es necesario el id en los request */
        const randomPeopleId = parseInt(Math.random() * (10 - 1) + 1);
        const randomPlanetId = parseInt(Math.random() * (10 - 1) + 1);

        try {
            // example swapi
            // const people = await app.swapiFunctions.genericRequest(`https://swapi.dev/api/people/${randomPeopleId}`, 'GET', null, true);

            // example swapi
            // const planet = await app.swapiFunctions.genericRequest(`https://swapi.dev/api/planet/${randomPlanetId}`, 'GET', null, true);

            const people = await app.swapiFunctions.genericRequestById(randomPeopleId, app,
                'swPeople',
                'applySwapiEndpoints',
                req.url,
                'id', 'name', 'mass', 'height', ['homeworld_name', 'homeworldName'], ['homeworld_id', 'homeworldId']);

            const planet = await app.swapiFunctions.genericRequestById(randomPlanetId, app,
                'swPlanet',
                'applySwapiEndpoints',
                req.url,
                'id', 'name', 'gravity');

            if (people && planet) {

                const commonPeople = new app.CommonPeople([
                    {property: 'id', value: people['id']},
                    {property: 'name', value: people['name']},
                    {property: 'mass', value: people['mass']},
                    {property: 'height', value: people['height']},
                    {property: 'homeworldName', value: people['homeworldName']},
                    {property: 'homeworldId', value: people['homeworldId']}]);

                commonPeople.init();

                commonPeople.getWeightOnPlanet(planet['id']);

                if (/[a-zA-Z]/.test(planet['gravity'])) {
                    planet['gravity'] = Number(planet['gravity'].replace(planet['gravity'].match(/\W[a-zA-Z]+/), ''));
                } else {
                    planet['gravity'] = Number(planet['gravity']);
                }

                res.status(200).json({
                    pesoPersonaje: app.swapiFunctions.getWeightOnPlanet(people['mass'], planet['gravity'])
                });
            }
        } catch (e) {
            res.status(201).json({message: e.message});
        }
    });

    server.get('/hfswapi/getLogs', async (req, res) => {
        const data = await app.db.logging.findAll({
            attributes: ['action', 'header', 'ip']
        });
        res.send(data);
    });

}

module.exports = applySwapiEndpoints;