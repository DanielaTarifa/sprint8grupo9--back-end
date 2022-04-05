const express= require ('express'); //se requiere el modulo de express
const router= express.Router(); //para modularizar el sistema de ruteo
const path = require('path');


//midelewares
const uploadFile = require('../middlewares/multerMiddleware');
const {validaciones} =require('../middlewares/validatorMiddleware');
const {validacionesEditPerfil} =require('../middlewares/editPerfilValidacion');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');


//controllers
let usersController= require('../controllers/usersController'); //para implementar el controlador se require


//rutas:
//formulario de Login
router.get('/login', guestMiddleware, usersController.login);//se llama la ruta y se ejecuta el metodo http
//procesar el login
router.post('/login', usersController.processLogin);


//formulario de registro
router.get('/register',guestMiddleware, usersController.register);//esto mi add

//formulario de recuperar
router.get('/recuperar', usersController.recover);
//formulario de perfil
router.get('/perfil', authMiddleware ,usersController.perfil);


//para salir del perfil
router.get('/logout/', userLoggedMiddleware, usersController.logout);// esta bien


//crud
router.get('/listar', userLoggedMiddleware ,usersController.listar);
router.post('/register', uploadFile.single('avatar'), validaciones, usersController.processRegister);//agrega usuarios
router.get('/borrar/:id', guestMiddleware ,usersController.delete);

router.get('/perfil/edit/:id', usersController.edit)//detalle
router.put('/perfil/edit/:id', uploadFile.single('avatar'), validacionesEditPerfil,usersController.update)

module.exports= router;