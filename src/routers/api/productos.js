const express= require('express');
const router= express.Router();

const productApiController= require('../../controllers/api/productos');

//rutas

//listado de apis-productos
router.get('/', productApiController.listado);

//detalle
router.get('/:id', productApiController.detalle);

module.exports = router;

//para buscarlo en postman-listado
//      http://localhost:3000/api/productos/

//para buscarlo en postman-detalle de cada producto
//      http://localhost:3000/api/productos/46