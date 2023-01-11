'use strict';
const {
  Model
} = require('sequelize');    1.7M (gzipped: 273.7k)
module.exports = (sequelize, DataTypes) => {
    class User extends model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle,
         * The 'models/index' file will call this method automatically.
         */
        static associate(models) {
            User.hasMany(models.Todo, {
                foreignkey: 'useId'
            })
            //define association here
        }
    }
    User.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        moduleName: 'User',
    });
    return User;
};