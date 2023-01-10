const { Car } = require('../models');

const carData = [
    {
        make: 'Chevy',
        model: 'Impala',
        year: 2016,
        miles:60000 ,
        color: 'red',
        img:"https://images.hgmsites.net/hug/2016-chevrolet-impala_100517787_h.jpg",
    },
    {
        make: 'Dodge',
        model: 'Challenger',
        year: 2022,
        miles:14000 , 
        color: 'black',
        img:"https://listings-prod.tcimg.net/listings/32449/04/98/2C3CDZJG7MH649804/CPSBDLIHRK73ILHF7A4RYQ3T7U-cr-540.jpg",
    },
    {
        make: 'Ford',
        model: 'Focus',
        year: 2013,
        miles: 120000,
        color: 'mettalic-grey',
        img:"https://static.cargurus.com/images/forsale/2022/11/03/21/27/2014_ford_focus-pic-1643258502280208610-1024x768.jpeg"
       
    },
    {
        make: 'Kia',
        model: 'Forte',
        year: 2017,
        miles: 89000,
        color: 'white',
        img:"https://listings-prod.tcimg.net/listings/24962/50/75/3KPF24AD5LE227550/NB27QKTMW7ZU2EJ773N2VPSYOA-cr-860.jpg"

    },
    {
        make: 'Mercedes-Benz',
        model: 'Sprinter',
        year: 2019,
        miles: 45000,
        color: 'yellow',
        img:"https://i2.wp.com/outmotorsports.com/wp-content/uploads/2020/04/IMG_7534.jpeg?fit=1280%2C1129&ssl=1"

    },
];

const seedCar = () => Car.bulkCreate(carData);

module.exports = seedCar;