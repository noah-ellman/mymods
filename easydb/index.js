// get the client
let mysql = require('mysql2/promise');

// create the connection, specify bluebird as Promise
// query database

function EasyDBFactory(options) {
    return new EasyDB(options);
}

function EasyDB(options) {
    this.options = options;
    Object.assign(this, options);
    const me = this;
    async function connect(){
        console.log("connecting");
        await mysql.createConnection(getCredentials())
        .then((db, promise) => {
            me.con = db;
            console.log("connected");
            return db;
        });
    }
    console.log(connect());
}

EasyDB.prototype.query = function (query) {
    return this.con.query(query);
}

function getCredentials() {
    return { host: 'localhost', user: 'root', password: '', database: 'msceit' };
};

module.exports = EasyDBFactory;