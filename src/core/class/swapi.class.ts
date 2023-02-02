import axios from "axios";

/**
 Swapi class for general http response methods
 */
export abstract class SwapiBase {

    getWeightOnPlanet(mass: number, gravity: number): number {
        return mass * gravity;
    }

    async genericRequest(url: string, method: string, body: Object, logging: boolean = false) {
        const response = await axios({
            method: method.toLowerCase(),
            url,
            data: body
        });
        const data = response;
        if (logging) {
            console.log(data.data);
        }
        return data.data;
    }

    async genericRequestById(id: number, repository, model, trace, url, atrr: any[]) {
        let data;
        try {
            data = repository.findByPk(id,
                {
                    raw: true,
                    attributes: atrr
                });
            if (data) {
                // registerLog('info', `${trace} > Ruta:${url} ${model}:${JSON.stringify(model)}`); todo no alcanza el tiempo
            }
        } catch (e) {
            // registerLog('error', `${trace} > Ruta:${url} error:${e.message}`); todo no alcanza el tiempo
        }
        return data;
    }
}