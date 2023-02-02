class AbstractPeople {

    constructor(values) {
        if (this.constructor == AbstractPeople) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.propertiesList = values;
    }

    async init() {
        if (this.propertiesList.length > 0) {
            this.propertiesList.forEach(v => {
                this[v['property']] = v['value'];
            })
        }
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getMass() {
        return this.mass;
    }

    getHeight() {
        return this.height;
    }

    getHomeworldName() {
        return this.homeworldName;
    }

    getHomeworlId() {
        return this.homeworldId;
    }

    getWeightOnPlanet(planetId) {
        const nativePlanetId = this.getHomeworlId().replace(this.getHomeworlId(), this.getHomeworlId().match(/\d+/));
        if (planetId === parseInt(nativePlanetId)) {
            throw new Error('you are trying to calculate the weight of a character on his home planet');
        }
    }

    getWhrascwo() {
        return this.whrascwo;
    }

    getAcwoahrracao() {
        return this.acwoahrracao;
    }

    getScracc() {
        return this.scracc;
    }

    getAcraahrcOaooanoorc() {
        return this.acraahrc_oaooanoorc;
    }

    getCorahwhOaooanoorc() {
        return this.corahwh_oaooanoorc;
    }

    getWorowoOaooanoorc() {
        return this.worowo_oaooanoorc;
    }

    getRhahrcaoacRoworarc() {
        return this.rhahrcaoac_roworarc;
    }

    getRrwowhwaworc() {
        return this.rrwowhwaworc;
    }

    getAcooscwoohoorcanwa() {
        return this.acooscwoohoorcanwa;
    }

    getWwahanscc() {
        return this.wwahanscc;
    }

    getCakwooaahwoc() {
        return this.cakwooaahwoc;
    }

    getHowoacahoaanwoc() {
        return this.howoacahoaanwoc;
    }

    getCaorarccacahakc() {
        return this.caorarccacahakc;
    }

    getOarcworaaowowa() {
        return this.oarcworaaowowa;
    }

    getWowaahaowowa() {
        return this.wowaahaowowa;
    }

    getHurcan() {
        return this.hurcan;
    }
}

module.exports.AbstractPeople = AbstractPeople;