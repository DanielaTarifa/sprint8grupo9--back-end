//const req = require('express/lib/request');
//const jsonDB = require('../model/jsonDatabase');
//const product = jsonDB('products');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op, where } = require("sequelize");
const { buildCheckFunction, validationResult } = require('express-validator');
const { createConnection } = require('net');

//una forma de llamar a modelos de la carpeta models
const Products = db.Product;
const Categories = db.Category;
const Numbersofinstallments = db.Numbersofinstallment;
const Sections = db.Section;

const productController={ 
    
    all:(req,res)=>{
        
        let productos =Products.findAll()
        .then(function(productos){
            res.render('./products/index',{productos:productos,mil:toThousand})
        }).catch(error => res.send(error))
        
    },
    listAdmi:(req,res)=>{//listado para los admi
        let listadoAdmi= Products.findAll()
        .then(function(listadoAdmi) {
            
            res.render('./products/allproducts',{listadoAdmi:listadoAdmi,mil:toThousand})})
        .catch(error => res.send(error))
    },
    listClient:(req,res)=>{//listado para los clientes
        let listadoClientProduct= Products.findAll()
        .then(function(listadoClientProduct) {
            
            res.render('./products/todos',{listadoClientProduct:listadoClientProduct,mil:toThousand})})
        .catch(error => res.send(error))
    },
    
    add:(req, res)=>{
        let promesaCuotas= Numbersofinstallments.findAll();
        let promesaSections= Sections.findAll();
        let promesaCategories= Categories.findAll();
        
        Promise.all([promesaCuotas, promesaSections, promesaCategories])
        .then(function([ cuotas, secciones, categorias]) {
            console.log(cuotas);
            console.log(secciones);
            console.log(categorias);
            res.render('./products/productAdd', {cuotas:cuotas, secciones:secciones, categorias:categorias})})
        .catch(error => res.send(error))
    
    },
    create:(req,res)=>{
        

        const resultValidation= validationResult(req);//resultValidation no es un array, sino q un objeto en donde esta error yq es un array.
        //return res.send(resultValidation.mapped()) //esta vea es la q convierte en objetos a los q antes eran indices dentre de el array errors

        if(resultValidation.errors.length > 0){
            let promesaCuotas= Numbersofinstallments.findAll();
            let promesaSections= Sections.findAll();
            let promesaCategories= Categories.findAll();
            
            Promise.all([promesaCuotas, promesaSections, promesaCategories])
            .then(function([ cuotas, secciones, categorias]) {
                
                res.render('./products/productAdd', {cuotas:cuotas, secciones:secciones, categorias:categorias, 
                    errors:resultValidation.mapped(), 
                    oldData:req.body,
                })
            }).catch(error => res.send(error))
            
    
        }else{
        
            Products.create({
                    name:req.body.nombre,
                    description:req.body.descripcion,
                    duesId:req.body.cuotas,
                    price:req.body.precio,
                    img:req.file.filename,
                    visibility:req.body.visualizacion,
                    stock:req.body.stock,
                    stockMin:req.body.stockMinimo,
                    stockMax:req.body.stockMaximo,
                    sectionId:req.body.secciones,
                    categoryId:req.body.categorias,
                })
                
            .then(()=>{
                res.redirect('/allproducts');
            })
                
            .catch(error => res.send(error))
        }

    },
    
    edit:(req, res)=> {
        let pedidoProducto=Products.findByPk(req.params.id);

        let promesaCuotas= Numbersofinstallments.findAll();
        let promesaSections= Sections.findAll();
        let promesaCategories= Categories.findAll();
        
        Promise.all([pedidoProducto, promesaCuotas, promesaSections, promesaCategories])
        .then(function([ producto, cuotas, secciones, categorias]) {
            
            res.render('./products/editProduct', {producto:producto, cuotas:cuotas, secciones:secciones, categorias:categorias})})
        .catch(error => res.send(error))

    },

    update:(req, res)=> {
        
        const resultValidation= validationResult(req);//resultValidation no es un array, sino q un objeto en donde esta error yq es un array.
        //return res.send(resultValidation.mapped()) //esta vea es la q convierte en objetos a los q antes eran indices dentre de el array errors

        if(resultValidation.errors.length > 0){
            let pedidoProducto=Products.findByPk(req.params.id);

            let promesaCuotas= Numbersofinstallments.findAll();
            let promesaSections= Sections.findAll();
            let promesaCategories= Categories.findAll();
            
            Promise.all([pedidoProducto, promesaCuotas, promesaSections, promesaCategories])
            .then(function([ producto, cuotas, secciones, categorias]) {
                
                res.render('./products/editProduct', {producto:producto, cuotas:cuotas, secciones:secciones, categorias:categorias, 
                    errors:resultValidation.mapped(),
                    oldData:req.body
                })})
            .catch(error => res.send(error))
    
    
        }else {

        
        Products.findByPk(req.params.id)//vas a la base de datos y la traes, en plan para q se guardey unq aparesca selecione una imagen por detra ya va  a estar guardado

        .then((unProducto)=>{
            Products.update({
                name:req.body.nombre,
                description:req.body.descripcion,
                duesId:req.body.cuotas,
                price:req.body.precio,
                img:req.file!=null?req.file.filename:unProducto.img,
                visibility:req.body.visualizacion,
                stock:req.body.stock,
                stockMin:req.body.stockMinimo,
                stockMax:req.body.stockMaximo,
                sectionId:req.body.seccion,
                categoryId:req.body.categorias,
            },{
                where:{
                    id:req.params.id
                }
            })
            .then(()=>{
                res.redirect("/allproducts")
            })
            .catch(error => res.send(error))
        })
        
    }
    },
    detail:(req,res)=>{
        let pedidoProducto= Products.findByPk(req.params.id);
        let pedidoListas= Products.findAll();
        let promesaCuotas= Numbersofinstallments.findAll();
        let promesaSections= Sections.findAll();
        let promesaCategories= Categories.findAll();
        
        Promise.all([pedidoProducto, pedidoListas, promesaCuotas, promesaSections, promesaCategories])
        .then(function([ producto, productos, cuotas, secciones, categorias]) {
            
            res.render('./products/productDetail', {producto:producto, productos:productos, cuotas:cuotas, secciones:secciones, categorias:categorias, mil:toThousand})
        })
        .catch(error => res.send(error))    
    },
    cart: (req,res)=>{
        res.render('./products/productCart')
    },
    resumen: function(req,res) {
        res.render('./products/resumen')
    },
    delete:(req,res)=>{
        Products.destroy({
            where:{
                id:req.params.id
            }
        })
        res.redirect("/allproducts");
    },

    search: (req, res) => {
    
        let search = req.query.search.toLowerCase()
        
        db.Product.findAll({
            include: ['category']
        })
        .then( products => {
            let filtrados = products.filter(e => e.name.toLowerCase().includes(search) || e.category.name.toLowerCase().includes(search));
            res.render('./products/categories', { filtrados})
        }).catch(error => res.send(error))
    },

    ayuda: (req, res) => { 
        res.render('./products/ayuda');
    }

}

module.exports=productController;