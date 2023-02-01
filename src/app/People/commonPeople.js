const {AbstractPeople} = require('./abstractPeople');

class CommonPeople extends AbstractPeople {
    constructor(id, name, mass, height, homeworldName, homeworldId){
        super(id, name, mass, height, homeworldName, homeworldId);
    }
}

module.exports.CommonPeople = CommonPeople;