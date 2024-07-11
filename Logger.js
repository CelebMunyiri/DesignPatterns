class Logger{
constructor(){
    this.logs = [];
}
 
getCount(){
    return this.logs.length;
}

log(message){
    const timeStamp = new Date().toISOString();
    this.logs.push(message, timeStamp);
    console.log(`${timeStamp}: ${message}`);
}
}

class Singleton{
    constructor(){
        if(!Singleton.instance){
Singleton.instance = new Logger();
        }
    }
    getInstance(){
        return Singleton.instance;
    }
}

//module.exports = Logger;
module.exports = Singleton


