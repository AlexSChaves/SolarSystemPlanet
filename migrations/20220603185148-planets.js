'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('planets', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			position: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			diameter: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			distanceFromSun: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			dayDuration: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			img: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, _Sequelize) => {
		await queryInterface.dropTable('planets');
	},
};
