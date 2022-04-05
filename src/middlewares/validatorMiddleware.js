const { body } = require('express-validator');
const path = require('path');
let db = require('../database/models');

module.exports={
    validaciones:[
        body('nombre').notEmpty().withMessage('Debes escribir tu nombre'),
        body('apellido').notEmpty().withMessage('Debes escribir tu apellido'),
        body('nombreDeUsuario').notEmpty().withMessage('Debes escribir un nombre de usuario'),
    
        body('email')
	.notEmpty().withMessage('Debe escribir un correo electrónico').bail()
	.isEmail().withMessage('Debe ingresar un correo válido'),
	body("email", "Este email ya se encuentra en uso").custom((value) => {
        return db.User
            .findOne({ where: { email: value } })
            .then((usuario) => {
            if (usuario) {
                return Promise.reject();
            }
            })
    }),
        
        body('avatar').custom((value, {req})=>{
    
            let file= req.file;
            let acceptedExtensions= ['.jpg','.png', '.gif'];
    
    
            if (!file) {
                throw new Error('Tienes que subir una imagen');
            }else{
                let fileExtension= path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones permitidas de archivo son ${acceptedExtensions.join(', ')}`); // no sirve usar comillas sino q hay q usar `
                }
            }
            
            return true
        }),
        body('tel')
            .notEmpty().withMessage('Debes escribir tu teléfono').bail()
            .isInt().withMessage('Deben ser números')
        ,
        body('password')
            .notEmpty().withMessage('Debes escribir una contraseña').bail()
            .isLength({min:8}).withMessage('La contraseña ser mas larga'),
        body('otraPassword')
            .notEmpty().withMessage('Debes reescribir tu contraseña').bail()
            .isLength({min:8}).withMessage('La contraseña ser más larga').bail()
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                throw new Error('La contraseña de confirmación deben coincidir con la contraseña');
                }
            
                // Indica el éxito de este validador personalizado síncrono
    
                return true;
            })
            
            ,
    
    ]
}