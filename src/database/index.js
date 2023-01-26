const fs = require('fs');
module.exports = JSON.parse(fs.readFileSync('./src/database/imageList.json', 'utf-8'));