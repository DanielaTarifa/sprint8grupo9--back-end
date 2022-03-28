const { body } = require('express-validator');
const path = require('path');

const validacionesEditPrduct=[
    body('nombre').notEmpty().withMessage('Debes escribir el nombre de tu producto').bail()
    .isLength({min:5}).withMessage('Deberá tener al menos 5 caracteres.'),
    body('precio').notEmpty().withMessage('Debes escribir precio de tu producto'),
    body('categorias').notEmpty().withMessage('Deberá elegir una categoria para su producto.'),
    body('descripcion').notEmpty().withMessage('Debes escribir una descripcion para tu producto.').bail()
    .isLength({min:20}).withMessage('La descripción que tenga al menos 20 caracteres'),
    
    body('cuotas').notEmpty().withMessage('Debes elegir la cuota de tu producto'),
    body('stock').notEmpty().withMessage('Debes escribir el stock de tu producto'),
    body('stockMinimo').notEmpty().withMessage('Debes escribir el stock minimo de tu producto'),
    body('stockMaximo').notEmpty().withMessage('Debes escribir el stock maximo de tu producto'),
    body('secciones').notEmpty().withMessage('Debes elegir la seccion de tu producto'),
    body('visualizacion').notEmpty().withMessage('Debes elegir la visualización de tu producto'),
    body('imagen').custom((value, {req})=>{
        
        let file= req.file;
        let acceptedExtensions= ['.jpg','.jpeg','.png', '.gif'];
    
    
        if(file){
            let fileExtension= path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) { //includes() lee un array y si esta(true) o no(false) devuelve un boleano
                throw new Error(`Las extensiones permitidas de archivo son ${acceptedExtensions.join(', ')}`); // no sirve usar comillas sino q hay q usar `
            }
        }
        
        return true
    })
    ]

    module.exports = validacionesEditPrduct;