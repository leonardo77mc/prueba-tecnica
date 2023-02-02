export abstract class AbstractPeople {

    /** properties for the JSON format */
    private propertiesList;
    private id: number;
    private name: string;
    private mass: number;
    private height: number;
    private homeworldName: string;
    private homeworldId: string;

    /** properties for the WOOKIEE format */
    private whrascwo: string;
    private acwoahrracao: number;
    private scracc: number;
    private acraahrc_oaooanoorc: string;
    private corahwh_oaooanoorc: string;
    private worowo_oaooanoorc: string;
    private rhahrcaoac_roworarc: string;
    private rrwowhwaworc: string;
    private acooscwoohoorcanwa: string[];
    private wwahanscc: string[];
    private cakwooaahwoc: string[];
    private howoacahoaanwoc: string[];
    private caorarccacahakc: string[];
    private oarcworaaowowa: string;
    private wowaahaowowa: string;
    private hurcan: string;

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
        const nativePlanetId = this.getHomeworlId()
            .replace(this.getHomeworlId(), this.getHomeworlId().match(/\d+/)[0]);
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