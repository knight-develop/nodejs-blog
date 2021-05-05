const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const port = 5000;
//cau hinh folder static
app.use(express.static(path.join(__dirname, 'public')));
//template engine
app.engine('hbs', handlebars({extname:'.hbs'}));
app.set('view engine', 'hbs');
//config handlebars
app.set('views', path.join(__dirname,'resources/views'));
app.get('/', (req, res) => res.render('home'))
app.get('/news', (req, res) => res.render('news'))
app.listen(port,() => console.log(`listening on port ${port}`));