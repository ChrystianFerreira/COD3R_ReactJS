console.log("Loading server...")
const server = require('./config/server');

console.log("Loading database...");
require('./config/database');

console.log("Loading routes...");
require('./config/routes')(server);