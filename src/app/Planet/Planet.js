class Planet {
    constructor(id, name, gravity){
        this.id = id;
        this.name = name;
        this.gravity = gravity;
    }

    async init(){
        throw new Error('To be implemented');
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getGravity() {
        return this.gravity;
    }
}

module.exports.Planet = Planet;