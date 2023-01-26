const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

/* rutas */
const mainRoutes = require('./routes/index.js');


/* direcciones */
app.use('/', mainRoutes);


/* puerto */
app.listen(port, console.log(`The server is on at the port ${port}\nhttp://localhost:${port}`));