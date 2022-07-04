'use strict';
//imagens utilizadas foram pegas no site https://www.todamateria.com.br/sistema-sol
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'planets',
			[
				{
					name: 'Mercúrio',
					position: 1,
					diameter: '4 879 km',
					distanceFromSun: '57 910 000 km',
					dayDuration: '58 dias 15h 30m',
					img: 'https://static.todamateria.com.br/upload/pl/an/planetamercurio.jpg',
				},
				{
					name: 'Vênus',
					position: 2,
					diameter: '12 104 km',
					distanceFromSun: '108 200 000 km',
					dayDuration: '116 dias 18h 0m',
					img: 'https://static.todamateria.com.br/upload/pl/an/planetavenus-0.jpg',
				},
				{
					name: 'Terra',
					position: 3,
					diameter: '12 742 km',
					distanceFromSun: '149 600 000 km',
					dayDuration: '23h 56m',
					img: 'https://static.todamateria.com.br/upload/pl/an/planetaterra-0-cke.jpg?auto_optimize=low',
				},
				{
					name: 'Marte',
					position: 4,
					diameter: '6 779 km',
					distanceFromSun: '227 900 000 km',
					dayDuration: '1 dia 0h 37m',
					img: 'https://static.todamateria.com.br/upload/pl/an/planetamarte.jpg',
				},
				{
					name: 'Júpiter',
					position: 5,
					diameter: '139 822 km',
					distanceFromSun: '778 500 000 km',
					dayDuration: '9h 56m',
					img: 'https://static.todamateria.com.br/upload/pl/an/planetajupiter.jpg',
				},
				{
					name: 'Saturno',
					position: 6,
					diameter: '116 464 km',
					distanceFromSun: '1.429.400.000 km',
					dayDuration: '10h 42m',
					img: 'https://static.todamateria.com.br/upload/pl/an/planetasaturno.jpg',
				},
				{
					name: 'Urano',
					position: 7,
					diameter: '50 724 km',
					distanceFromSun: '2,871 * 10^9 km',
					dayDuration: '17h 14m',
					img: 'https://static.todamateria.com.br/upload/pl/an/planetaurano.jpg',
				},
				{
					name: 'Netuno',
					position: 8,
					diameter: '49 244 km',
					distanceFromSun: '4,495 * 10^9 km',
					dayDuration: '16h 6m',
					img: 'https://static.todamateria.com.br/upload/pl/an/planetanetuno.jpg',
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('planets', null, {});
	},
};
