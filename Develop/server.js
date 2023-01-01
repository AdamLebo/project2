const API_KEY = 'e9qUi8tjNZjmYHQFGw9CPpwm2jRUhU5TKdyGWWN4bql0D5QUtN';

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const { appendFile } = require('fs');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//get file for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, ))
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
    res.sendFile(path.join(__dirname, ))
});


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });