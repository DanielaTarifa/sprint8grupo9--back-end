const express = require('express');
const router = express.Router();
const userApiController = require('../../controllers/api/usuarios');

//lista de todos los usuarios
router.get('/', userApiController.listar);

//cada usuario
router.get('/:id', userApiController.detalle);

module.exports = router

//para buscarlo en postman-lista
        //http://localhost:3000/api/usuarios/
//para buscarlo en postman-cada usuario(detalle)
        //http://localhost:3000/api/usuarios/13