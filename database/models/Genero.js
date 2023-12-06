module.exports = (Sequelize, DataTypes) => {
    const alias = 'Genero';

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        }
    }
    const config = {
        tableName: 'generos',
        timestamps: false
    }
    const Genero = Sequelize.define(alias, cols, config)

    Genero.associate = (models) => {
        Genero.hasMany(models.Cancion, {
            as: 'canciones',
            foreignKey: 'genero_id'
        })
    }

    return Genero
}
