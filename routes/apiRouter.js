const express = require('express');
const router = express.Router();
const apiController = require("../controllers/apiController")

router.get("/canciones", apiController.canciones)
router.post("/canciones", apiController.create)
router.get("/canciones/:id", apiController.findOne)
router.put("/canciones/:id", apiController.update)
router.delete("/canciones/:id", apiController.delete)
router.get("/generos", apiController.getList)


module.exports = router;