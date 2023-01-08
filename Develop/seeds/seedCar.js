const { Car } = require('../models');

const carData = [
    {
        make: 'Chevy',
        model: 'Impala',
        year: 2016,
        color: 'red',
    },
    {
        make: 'Dodge',
        model: 'Challenger',
        year: 2022,
        color: 'black',
    },
    {
        make: 'Ford',
        model: 'Focus',
        year: 2013,
        color: 'mettalic-grey'
    },
    {
        make: 'Kia',
        model: 'Forte',
        year: 2017,
        color: 'white',
    },
    {
        make: 'Mercedes-Benz',
        model: 'Sprinter',
        year: 2019,
        color: 'yellow',
    },
];

const seedCar = () => Car.bulkCreate(carData);

module.exports = seedCar;