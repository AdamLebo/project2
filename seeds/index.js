const sequelize = require('../config/connection');
const seedCar = require('./seedCar');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedCar();

    process.exit(0);
};

seedAll();