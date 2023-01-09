const router = require('express').Router();
const { User, Car } = require('../models');

//get all cars for homepage
router.get('/', async (req, res) => {
    try{
        const dbCarData = await Car.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 
                                'email',
                    ],
                },
            ],
        });
        const cars = dbCarData.map((car) => car.get({ plain: true }));
        res.render('homepage', {
            cars,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/cars/:id', async (req, res) => {
    try{
        const dbCarData = await Car.findByPk(req.params.id)

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