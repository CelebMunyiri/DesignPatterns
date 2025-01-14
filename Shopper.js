var Logger = require('./Logger');

var logger = new Logger().getInstance();

class Shopper{
    constructor(name, money){
        this.name=name;
        this.money = money;
        logger.log(`New shopper: ${name} has ${money} in their account`)
    }
}

module.exports = Shopper;