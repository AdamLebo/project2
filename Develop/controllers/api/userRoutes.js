const router = require('express').Router();
const { User, Car } = require('../../models');

//create new user
router.post('/', async (req, res) => {
    try{
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

//create new car
router.post('/sell', async (req, res) => {
    try{
        const dbCarData = await Car.create({
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,

        })
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
})

//login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!dbUserData) {
            res.status(400).json({message: 'Incorrect email or password, please try again.'});
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({message: 'Incorrect email or password, please try again.'});
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

//logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;