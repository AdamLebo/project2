const router = require('express').Router();
const { User, Car } = require('../models');
const fs = require('fs')
const {listingData} = require("../public/js/listing")

//get all cars for homepage
router.get('/cars', async (req, res) => {
    try{
        // const dbCarData = await Car.findAll({
        //     include: [
        //         {
        //             model: User,
        //             attributes: ["id", "username", "email"],
        //         },
        //     ],
        // });
        // const cars = dbCarData.map((car) => car.get({ plain: true }));
        // res.render('homepage', {
        //     cars,
        //     loggedIn: req.session.loggedIn,
        // });
        fs.readFile("cars.json", function (error, data) {
            if (error) {
            res.status(500).end();
            } else {
            res.render("homepage", {
            
            cars: JSON.parse(data),
            loggedIn: req.session.loggedIn,

            });
            }
            });
const {listingData} = require("../public/js/listing")

//get all cars for homepage
router.get('/', async (req, res) => {
    try{
        const dbCarData = await Car.findAll({
            include: [
                {
                    model: User,
                    attributes: ["id", "username", "email"],
                },
            ],
        });
        const cars = dbCarData.map((car) => car.get({ plain: true }));
        res.render('homepage', {
            cars,
            listData: listingData.listData,
            loggedIn: req.session.loggedIn,
            listData: listingData.listData,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/cars/:id', async (req, res) => {
    try{
        const dbCarData = await Car.findByPk(req.params.id, {
            include: [
                {
                    model: Car,
                    attributes: [
                        'id',
                        'year',
                        'make',
                        'model',
                        'color',
                    ],
                },
            ]
        })

        const car = dbCarData.get({ plain: true });
        res.render('listing-details', { car, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;