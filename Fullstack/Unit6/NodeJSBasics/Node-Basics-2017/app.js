
const profile = require('./profile')

const users = process.argv.slice(2);
users.forEach(profile.get);


//console.log(http.STATUS_CODES);
