const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes')
const path = require('path');
const port = 5000;
//cau hinh folder static
app.use(express.static(path.join(__dirname, 'public')));
//logger
app.use(morgan('combined'));
//template engine
app.engine('hbs', handlebars({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
//config handlebars
app.set('views', path.join(__dirname,'resources/views'));
//Route init
route(app);

app.listen(port,() => console.log(`listening on port ${port}`));