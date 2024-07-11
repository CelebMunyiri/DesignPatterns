var Logger = require('./Logger');
var Shopper = require('./Shopper')
var Store = require('./Store')

var logger = new Logger().getInstance();

logger.log('starting app...')

var shopper = new Shopper('alex', 500);
var ski_shop = new Store('David Supplies',[
    {
        item:'Tv',
        qty:3,
        price:35000
    },
    {
        item:'Music System',
        qty:4,
        price:15000
    }

])

logger.log('finished config...')

