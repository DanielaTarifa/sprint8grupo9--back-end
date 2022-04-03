const { body } = require('express-validator');
const path = require('path');



module.exports={
    validacionesEditPerfil:[
        body('nombre').notEmpty().withMessage('Debes escribir tu nombre'),
        body('apellido').notEmpty().withMessage('Debes escribir tu apellido'),
        body('nombreDeUsuario').notEmpty().withMessage('Debes escribir un nombre de usuario'),
    
        body('email')
            .notEmpty().withMessage('Debes escribir tu correo electrónico').bail()
            .isEmail().withMessage('Debes escribir un formato de correo electrónico válido'),
        
        body('avatar').custom((value, {req})=>{
    
            let file= req.file;
            let acceptedExtensions= ['.jpg','.png', '.gif'];
    
    
            if(file){
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
            
            
    
    ]
}