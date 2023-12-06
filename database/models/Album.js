module.exports = (Sequelize, DataTypes) => {
    const alias = "Album";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        duracion: {
            type: DataTypes.INTEGER,
        },
    };
    const config = {
        tableName: "albumes",
        timestamps: false,
    };
    const Album = Sequelize.define(alias, cols, config);

    return Album;
};