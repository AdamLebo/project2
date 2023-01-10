const User = require('./User');
const Car = require('./Car');

User.hasMany(Car, {
    foreignKey: 'owner_id',  onDelete: 'cascade',
});

Car.belongsTo(User, {
    foreignKey: 'owner_id',
});

module.exports = { User , Car };