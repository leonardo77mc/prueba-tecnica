const fetch = require('node-fetch');
const registerLog = require('../../commons/logHandling');

const getWeightOnPlanet = (mass, gravity) => {
    return mass * gravity;
}

const genericRequest = async (url, method, body, logging = false) => {
    let options = {
        method: method
    }
    if(body){
        options.body = body;
    }
    const response = await fetch(url, options);
    const data = await response.json();
    if(logging){
        console.log(data);
    }
    return data;
}

const genericRequestById = async (id, app, model, trace, url, ...atrr) => {
    let data;
    try {
        data = await app.db[model].findByPk(id,
            {
                raw: true,
                attributes: [...atrr]
            });
        if (data) {
            registerLog('info', `${trace} > Ruta:${url} ${model}:${JSON.stringify(model)}`);
        }
    } catch (e) {
        registerLog('error', `${trace} > Ruta:${url} error:${e.message}`);
    }
    return data;
}

module.exports = {
    getWeightOnPlanet,
    genericRequest,
    genericRequestById
}