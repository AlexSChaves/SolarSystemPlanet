const planet = (sequelize, DataTypes) => {
	const planet = sequelize.define(
		'planet',
		{
			id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
			name: DataTypes.STRING,
			position: DataTypes.INTEGER,
			diameter: DataTypes.STRING,
			distanceFromSun: DataTypes.STRING,
			dayDuration: DataTypes.STRING,
			img: DataTypes.STRING,
		},
		{ timestamps: false }
	);
	return planet;
};

module.exports = planet;
