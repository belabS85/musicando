module.exports = (Sequelize, DataTypes) => {
    const alias = "Cancion";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duracion: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        genero_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        album_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        artista_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    };
    const config = {
        tableName: "canciones",
        timestamps: false,
    };
    const Cancion = Sequelize.define(alias, cols, config);

    Cancion.associate = (models) => {
        Cancion.belongsTo(models.Album, {
            as: "album",
            foreignKey: "album_id"
        });
    }
    Cancion.associate = (models) => {
        Cancion.belongsTo(models.Genero, {
            as: "genero",
            foreignKey: "genero_id",
        });
    }
    Cancion.associate = (models) => {
        Cancion.belongsTo(models.Artista, {
            as: "artista",
            foreignKey: "artista_id",
        });
    }
    return Cancion;
};
