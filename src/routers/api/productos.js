const express= require('express');
const router= express.Router();

const path = require('path');
const productApiController= require('../../controllers/api/productApiController');

//rutas

//home
router.get('/', productApiController.allss);
//listas pruduct
//router.get('/', productApiController.listAdmi);//listado admi-alls
//router.get('/todos', productApiController.listClient);//listado admi-alls

//detalle
//router.get('/:id', apiProductController.detail);

module.exports = router;