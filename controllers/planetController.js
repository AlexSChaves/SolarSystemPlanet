const { planet } = require('../models');

const getAll = async (req, res) => {
	try {
		const planetsAll = await planet.findAll();

		return res.status(200).json({ planetsAll });
	} catch (error) {
		res.status(500).json({ message: 'Algo deu Errado' });
	}
};

const findById = async (req, res) => {
	try {
		const { id } = req.params;
		const planetById = await planet.findByPk(id);

		if (!planetById) return res.json({ message: 'Algo deu Errado' });

		return res.json({ planetById });
	} catch (error) {
		res.status(500).json({ message: 'Algo deu Errado' });
	}
};

module.exports = { getAll, findById };
