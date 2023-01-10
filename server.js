require('dotenv').config();
const path = require('path');
const express = require('express');
const fs = require('fs');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const dotenv = require('dotenv').config();

// const PORT = process.env.PORT || 3001;
const PORT =3000;
const app = express();
const {listingData} = require("./public/js/listing.js")

const sess = {
    secret: 'i hate bananas',
    resave: false,
    saveUninitialized: true,
};

// app.use(session(sess));

const { data } = require('./public/js/dropdown');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
const hbs = exphbs.create({});

//setting engine to view handlebars
app.engine("handlebars", hbs.engine)
app.set('view engine', 'handlebars');
app.get('/loginn', (req, res) => {
  console.log('');
  res.render("login", {})
});
app.get("/car/:carname", (req,res) => {
  let makes= [
      { value: 'chevy', label: 'Chevy' },
      { value: 'dodge', label: 'Dodge' },
      { value: 'ford', label: 'Ford' },
      { value: 'kia', label: 'Kia' },
      { value: 'mercedez-benz', label: 'Mercedes-Benz' }
    ]
    let cars  = [
      {
          "make": "Chevy",
          "model": "Impala",
          "year": 2016,
          "miles":60,000,
          "color": "red",
          "img":"https://images.hgmsites.net/hug/2016-chevrolet-impala_100517787_h.jpg"
          
      },
      {
          "make": "Dodge",
          "model": "Challenger",
          "year": 2022,
          "miles": 14000,
          "color": "black",
          "img":"https://listings-prod.tcimg.net/listings/32449/04/98/2C3CDZJG7MH649804/CPSBDLIHRK73ILHF7A4RYQ3T7U-cr-540.jpg"

  
      },
      {
        "make": "Ford",
        "model": "Focus",
        "year": 2013,
        "miles":120000,
        "color": "mettalic-grey",
       "img":"https://static.cargurus.com/images/forsale/2022/11/03/21/27/2014_ford_focus-pic-1643258502280208610-1024x768.jpeg"

    },
    {
        "make": "Kia",
        "model": "Forte",
        "year": 2017,
        "miles": 89000,
        "color": "white",
        "img":"https://listings-prod.tcimg.net/listings/24962/50/75/3KPF24AD5LE227550/NB27QKTMW7ZU2EJ773N2VPSYOA-cr-860.jpg"
    },
    {
        "make": "Mercedes-Benz",
        "model": "Sprinter",
        "year": 2019,
        "color": "yellow",
        "img":"https://i2.wp.com/outmotorsports.com/wp-content/uploads/2020/04/IMG_7534.jpeg?fit=1280%2C1129&ssl=1"


    },

    ]

    let carData = makes.find((car) => {
      if(car.value == req.params.carname){
          return true
      }
    })

  res.render ("car",{
      cars
  })
})
app.get("/getcars", function (req, res) {
  fs.readFile("cars.json", function (error, data) {
    if (error) {
    res.status(500).end();
    } else {
    res.render("car", {
    
    cars: JSON.parse(data),
    loggedIn: req.session.loggedIn,

    });
    }
    });
  });

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


app.get('/list', (req, res) => {
    res.render("list", listingData)
  });

 
app.use(routes)

// sequelize.sync({ force: false }).then(() => {

    app.listen(PORT, () => {
        console.log(`Example Apps listening at http://localhost:${PORT}`);
      });
    // });
