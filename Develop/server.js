require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

const sess = {
    secret: 'i hate bananas',
    resave: false,
    saveUninitialized: true,
};

app.use(session(sess));

const { data } = require('./public/js/dropdown');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
const hbs = exphbs.create({});

//setting engine to view handlebars
app.engine("handlebars", hbs.engine)
app.set('view engine', 'handlebars');

app.use(routes)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`);
      });
    });
