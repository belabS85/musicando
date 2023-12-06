module.exports = (Sequelize, DataTypes) => {
    const alias = "Artista";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        apellido: {
            type: DataTypes.STRING,
        },
    };
    const config = {
        tableName: "artistas",
        timestamps: false,
    };
    const Artista = Sequelize.define(alias, cols, config);

    return Artista;
};