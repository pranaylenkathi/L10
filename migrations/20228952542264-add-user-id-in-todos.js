'use strict';

const { down } = require("./20222992225115-create-user");

module.exports = {
    async up (queryInterface, Sequelize) {
        queryInterface.addColumn('Todos', 'userId', {
            type: Sequelize.DataTypes.INTEGER
        })

        queryInterface.addConstraint('Todos', {
            fields: ['userId'],
            type: 'foreign key',
            references: {
                table: 'Users',
                field: 'id'
            }
        })
        /**
         * Add alternating commands here.
         * 
         * Example:
         * await queryinterface
         */
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.removeColumn('Todos', 'userId')
    }
};