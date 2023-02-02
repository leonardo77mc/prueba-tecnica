const {AbstractPeople} = require('./abstractPeople');

class CommonPeople extends AbstractPeople {
    constructor(values){
        super(values);
    }
}

module.exports.CommonPeople = CommonPeople;