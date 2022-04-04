const path = require('path');
let db = require('../../database/models');
const sequelize = db.sequelize;
const Op= db.sequelize.Op;

//una forma de llamar a modelos de la carpeta models
const Products = db.Product;
const Categories = db.Category;
const Numbersofinstallments = db.Numbersofinstallment;
const Sections = db.Section;


const productApiController={

    listado:(req,res)=>{//listado para todos los productos

        let mouse=Products.count({
            where:{
                categoryId:1
            }
        })

        let teclado=Products.count({
            where:{
                categoryId:2
            }
        })

        let auriculares=Products.count({
            where:{
                categoryId:3
            }
        })

        let cpu=Products.count({
            where:{
                categoryId:4
            }
        })

        let placaDeVideo=Products.count({
            where:{
                categoryId:5
            }
        })

        let Procesador=Products.count({
            where:{
                categoryId:6
            }
        })

        let Pantalla=Products.count({
            where:{
                categoryId:7
            }
        })

        let kitCombo=Products.count({
            where:{
                categoryId:8
            }
        })
        
        let categoriass=Categories.findAll()

        Promise.all([mouse,teclado,auriculares,cpu,placaDeVideo,Procesador,Pantalla,kitCombo,categoriass])

        .then((catego)=>{

        
            Products.findAll({
                include:['category']
            })
    
            .then((productos) =>{
                
                let arrayProd=[]
                    for(let i=0; i < productos.length; i++){
                        let unProduct={
                            id:productos[i].id,
                            name:productos[i].name,
                            description:productos[i].description,
                            category:productos[i].category.name,//para ver el name
                            imagen: `http://localhost:3001/img/${productos[i].img}`,
                            detail: `http://localhost:3001/api/productos/`+ productos[i].id,
                            
                        }
                        arrayProd.push(unProduct)
                    }
                
                let arrayCatego=[
                    {
                    name:'Mouse',
                    count:catego[0]//es del this el cual recore posision por posicion al promise.all
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

                
                
                    
                        let ultimo=arrayProd.pop()
                        
                        
                    

                let respuestaProduct={
                    count: productos.length,
                    countByCategory: arrayCatego,
                    countCategory:catego[8].length,
                    ultimoproduct: ultimo,
                    products: arrayProd
                }
                return res.status(200).json(respuestaProduct)
            })
        })
        .catch(error => {res.send({error:'Not found'});})
    },

    detalle:(req,res)=>{
        Products.findByPk(req.params.id,{
            include:['category', 'section','duesNumbers']//el include lo saco talcual esta en en el (as:)---> /database/models/products--belongTo{as:Nombre}
        })
        .then((producto)=>{
            
            let array=[
            {nameCategory: producto.category.name},
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
                imagen: `http://localhost:3001/img/${producto.img}` ,
            }
            return res.status(200).json(respuesta)
        })
        .catch(error => {res.send({error:'Not found'});})  
        
    }
}
module.exports = productApiController;