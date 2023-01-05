const path = require('path');
const express = require('express');
//const session = require('express-session');
const exphbs = require('express-handlebars');
const { data } = require('./public/js/dropdown');
//const { appendFile } = require('fs');

const PORT = 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
const hbs = exphbs.create({});
// const sequelize = require("./config/connection");

//setting engine to view handlebars
app.engine("handlebars", hbs.engine)
app.set('view engine', 'handlebars');

//get file for homepage
app.get('', (req, res) => {
    res.render("homepage", data)
});

//get file for login page
app.get('/login', (req, res) => {
    res.render("login", {})
});

//NEW***
//Attempt to work on routes to  
//display car listings grabbed the values
//from Adam's array.
app.get("/car/:carname", (req,res) => {
    let makes= [
        { value: 'honda', label: 'Honda' },
        { value: 'toyota', label: 'Toyota' },
        { value: 'ford', label: 'Ford' },
        { value: 'chevrolet', label: 'Chevrolet' },
        { value: 'tesla', label: 'Tesla' }
      ]

      let carData = makes.find((car) => {
        if(car.value == req.params.carname){
            return true
        }
      })

    res.render ("car",{
        carData
    })
})

//end of code block 


//get file for specific account
app.get('/:accountid', (req, res) => {
    res.sendFile(path.join(__dirname, ))
});

//get specific car listing
app.get('/:carid', (req, res) => {
    res.render("")
});

// sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`);
      });
// });
