const path = require('path');
let db = require('../../database/models');
const sequelize = db.sequelize;
const Op= db.sequelize.Op;

//una forma de llamar a modelos de la carpeta models
const Products = db.Products;
const Categories = db.Categories;
const Numbersofinstallments = db.Numbersofinstallments;
const Sections = db.Sections;


const productApiController={

    listado:(req,res)=>{//listado para todos los productos

        let mouse=Products.count({
            where:{
                categoryId:15
            }
        })

        let teclado=Products.count({
            where:{
                categoryId:16
            }
        })

        let auriculares=Products.count({
            where:{
                categoryId:17
            }
        })

        let cpu=Products.count({
            where:{
                categoryId:18
            }
        })

        let placaDeVideo=Products.count({
            where:{
                categoryId:19
            }
        })

        let Procesador=Products.count({
            where:{
                categoryId:20
            }
        })

        let Pantalla=Products.count({
            where:{
                categoryId:21
            }
        })

        let kitCombo=Products.count({
            where:{
                categoryId:22
            }
        })
        
        let categoriass=Categories.findAll()

        Promise.all([mouse,teclado,auriculares,cpu,placaDeVideo,Procesador,Pantalla,kitCombo,categoriass])

        .then((catego)=>{

        
            Products.findAll({
                include:['Category']
            })
    
            .then((productos) =>{
                
                let arrayProd=[]
                    for(let i=0; i < productos.length; i++){
                        let unProduct={
                            id:productos[i].id,
                            name:productos[i].name,
                            description:productos[i].description,
                            category:productos[i].Category.name,//para ver el name
                            detail: `http://localhost:3000/api/productos/`+ productos[i].id,
                            
                        }
                        arrayProd.push(unProduct)
                    }
                
                let arrayCatego=[
                    {
                    name:'Mouse',
                    count:catego[0]
                    },
                    {
                    name:'Teclado',
                    count:catego[1]
                    },
                    {
                    name:'Auriculares',
                    count:catego[2]
                    },
                    {
                    name:'CPU',
                    count:catego[3]
                    },
                    {
                    name:'Placa de video',
                    count:catego[4]
                    },
                    {
                    name:'Procesador',
                    count:catego[5]
                    },
                    {
                    name:'Pantalla',
                    count:catego[6]
                    },
                    {
                    name:'Kit-Combo',
                    count:catego[7]
                    },
                ]

                let respuestaProduct={
                    count: productos.length,
                    countByCategory: arrayCatego,
                    countCategory:catego[8].length,
                    users: arrayProd
                }
                return res.status(200).json(respuestaProduct)
            })
        })
        .catch(error => {res.send({error:'Not found'});})
    },

    detalle:(req,res)=>{
        Products.findByPk(req.params.id,{
            include:['Category', 'section','duesNumbers']//el include lo saco talcual esta en en el (as:)---> /database/models/products--belongTo{as:Nombre}
        })
        .then((producto)=>{
            
            let array=[
            {nameCategory: producto.Category.name},
            {nameSeccion: producto.section.name},
            {nameCuota: producto.duesNumbers.name}
            ]

            let unProduct={
                id: producto.id ,
                name: producto.name,
                description: producto.description ,
                duesId: producto.duesId ,
                price: producto.price,
                img: producto.img,
                visibility: producto.visibility,
                stock: producto.stock,
                stockMax: producto.stockMax,
                sectionId: producto.sectionId,
                categoryId: producto.categoryId,
            }

            let respuesta={
                infoProduct: unProduct,
                arrays: array,
                imagen: `http://localhost:3000/img/${producto.img}` ,
            }
            return res.status(200).json(respuesta)
        })
        .catch(error => {res.send({error:'Not found'});})  
        
    }
}
module.exports = productApiController;