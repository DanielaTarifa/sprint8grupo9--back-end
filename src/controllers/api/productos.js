const path = require('path');
let db = require('.../database/models');
const sequelize = db.sequelize;
const Op= db.sequelize.Op;

//una forma de llamar a modelos de la carpeta models
const Products = db.Products;
const Categories = db.Categories;
const Numbersofinstallments = db.Numbersofinstallments;
const Sections = db.Sections;


const productApiController={
    /*,
    
    listAdmi:(req,res)=>{//listado para los admi
        Products.findAll()
        .then(listadoAdmi=>{
            let respuesta ={
                meta:{
                    count:200,
                    total:listadoAdmi,
                    url: 'api/listadoAdmi',
                },
                data:listadoAdmi
            }
            res.json(respuesta)
            })
    },
    listClient:(req,res)=>{//listado para los clientes
        Products.findAll()
        .then(function(listadoClientProduct){
            let respuesta ={
                meta:{
                    status:200,
                    total:listadoAdmi,
                    url: 'api/listadoClientProduct',
                },
                data:listadoClientProduct
            }
            res.json(respuesta)
            })
        
    },
    
    detail:(req,res)=>{
        let pedidoProducto= Products.findByPk(req.params.id);
        let pedidoListas= Products.findAll();
        let promesaCuotas= Numbersofinstallments.findAll();
        let promesaSections= Sections.findAll();
        let promesaCategories= Categories.findAll();
        
        Promise.all([pedidoProducto, pedidoListas, promesaCuotas, promesaSections, promesaCategories])
        .then(function([ producto, productos, cuotas, secciones, categorias]) {
            let respuesta={
                meta:{
                    status:200,
                    total:xxx.length,
                    url:'/api/xx/:id'
                },
                data:{}
            }
            res.json(respuesta)
        })
        .catch(error => res.send(error))    
    },*/
}
module.exports = productApiController;