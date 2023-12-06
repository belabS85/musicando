const db = require("../database/models");

module.exports = {
    canciones: async (req, res) => {
        try {
            const canciones = await db.Cancion.findAll();
            if (canciones.length == 0) {
                return res.json({ mensaje: " no hay canciones" })
            }
            res.json(canciones)
        } catch (error) {
            console.log(error)
        }
    },



    findOne: async (req, res) => {
        try {
            const id = req.params.id;
            const cancion = await db.Cancion.findByPk(id);
            res.json(cancion);

        } catch (error) {
            console.log(error)

        }
    },


    update: async (req, res) => {
        const id = req.params.id;
        try {
            const cancionEncontrada = await db.Cancion.findByPk(id);
            console.log(cancionEncontrada + 'cancion encontrada')
            const datosActualizados = await db.Cancion.update(
                {
                    titulo: req.body.titulo ? req.body.titulo : cancionEncontrada.titulo,
                    album_id: req.body.album_id ? req.body.album_id : cancionEncontrada.album_id,
                    duracion: req.body.duracion ? req.body.duracion : cancionEncontrada.duracion,
                    artista_id: req.body.artista_id ? req.body.artista_id : cancionEncontrada.artista_id,
                    genero_id: req.body.genero_id ? req.body.genero_id : cancionEncontrada.genero_id,
                },
                {
                    where: { id: id },
                }
            );
            const cancionActualizada = await db.Cancion.findByPk(id);
            console.log(datosActualizados + 'estos son datos actualizados')
            res.json(cancionActualizada);
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        try {
            const nuevaCancion = {
                titulo: req.body.titulo,
                album_id: req.body.album_id,
                duracion: req.body.duracion,
                artista_id: req.body.artista_id,
                genero_id: req.body.genero_id,
            };

            nuevaCancion.created_at = new Date();
            const cancion = await db.Cancion.create(nuevaCancion);
            res.json(cancion);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {


        const id = req.params.id;
        const cancionBorada = await db.Cancion.findByPk(id)
        if (cancionBorada) {
            try {
                await db.Cancion.destroy({ where: { id } });
                res.json({ mensaje: "Canción eliminada correctamente." });

            } catch (error) {
                console.log(error)

            }
        } else {
            res.json({ mesaje: "la cancion con " + id + "no existe" })
        }


    },
    getList: async (req, res) => {
        try {

            const generos = await db.Genero.findAll({
                include: ['canciones']
            });
            if (generos.length == 0) {
                return res.json({ mensaje: "No hay generos cargados." });
            }
            res.json(generos);

        } catch (error) {
            console.log(error)

        }
    },

}