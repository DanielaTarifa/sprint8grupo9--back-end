const {validationResult} = require('express-validator');
//const { create } = require('../model/User');
//const User = require('../model/User');
const  bcryptjs = require ('bcryptjs');
const session = require('express-session');

const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//una forma de llamar a modelos de la carpeta models
const Users = db.User;
const Rols = db.Rol;
 
const usersController={
    register:(req,res)=>{
        return res.render('users/register')
    },

    listar:(req,res)=>{
        Users.findAll()
        .then(listarUsuarios => {
            res.render('users/listar', {listarUsuarios: listarUsuarios})
        });

    },

    delete: (req, res) =>{
        let userId = req.params.id;
        Users.destroy({where: {id: userId}}) 
        .then(()=>{
            return res.redirect('/')})
        .catch(error => res.send(error)) 
    },
    
    processRegister:(req,res)=>{
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

    //tiene que salir un cartel q ya esta en uso el mail si se repite 2 veces//
    /*let userInDB =  db.Users.findOne ({where: {email: req.body.email}});

    console.log(userInDB);
    console.log(userInDB instanceof Users);
        
        if(userInDB){
            return res.render('./users/register',{
                errors:{
                    email :{
                        msg: 'Este email ya esta registrado'
                    }
                },
                oldData:req.body
            })
        };*/

        Users.create({
            name: req.body.nombre,
            lastname: req.body.apellido,
            userName: req.body.nombreDeUsuario,
            email: req.body.email,
            cel: req.body.tel,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename,
            rolId: 1 })

            .then( () => {
                return res.redirect('/login');
            })
            .catch( error => {
                return res.send(error);
            });

            

        //crea nuevos usuarios en json/ 
        /*let userToCreate= {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename,
            rol: "cliente"
        }

        let userCreated=  User.create(userToCreate);

        return res.redirect('/login'); //una vez registrado te lleva para que entres x login */
    },

    login:( req,res)=>{
        return res.render('users/login');
        },

    processLogin:(req,res)=>{
        Users.findOne(
            { 
                where : { email: req.body.email}
            })
        .then( user => {

            if (user != null) {

                    let isOkPassword = bcryptjs.compareSync(req.body.password, user.password);

                    if (isOkPassword) {

                        req.session.userLogged = user;

                        if (req.body.remember_user){

                            res.cookie('userEmail', req.body.email, {maxAge:(1000 * 60) * 60})
                        }

                            res.redirect('/perfil')
                    }

                    res.render('./users/login' , {
                        errors: {
                            email: {
                                msg: 'Las credenciales son inválidas!'
                            }
                        }
                    });
                } else {
                    res.render('./users/login', {
                        errors: {
                            email: {
                                msg: 'Debes escribir tu correo electrónico'
                            }
                            
                        }
                    });
                }
        })
        .catch(error => res.send(error));
    },

    edit: (req, res)=> {
        res.render('users/editarusuario',{user: req.session.userLogged});
    },

    update: (req, res)=>{
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('users/editarusuario', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                user: req.session.userLogged
            })
        }else{


            Users.findByPk(req.params.id)//este es para llamar a los datos viejo, y el parametro 'unProducto' es para usarlo en plan la imagen
                .then(function(unUsuario){
        
                    Users.update({
                        name: req.body.nombre,
                        lastname: req.body.apellido,
                        userName: req.body.nombreDeUsuario,
                        email: req.body.email,
                        cel: req.body.tel,
                        avatar:req.file!=null?req.file.filename:unUsuario.avatar,
                    },{
                        where: { id: req.params.id,
                        }
                    })
                    .then( () => {//aca actualizo session
                        Users.findByPk(req.params.id)//LLAMO A  LOS DATOS ACTUALIZADOS, recien ahora puedo hacer la actualizacion a session,este 2do es para llamar con los datos actualizados, q paso por el update
        
                        .then(function (Users) {
                            req.session.userLogged = Users
        
                            res.redirect("/perfil");
                        })
                            
                            
                    })
                    
                    .catch( error => {
                        return res.send(error);
                    });
        
                })

        }

    
        
    },
    
    
    recover:(req,res)=>{
        return res.render('users/recuperar');
    },//esta bien

    perfil:(req,res)=>{
        
        res.render('users/perfil', {user: req.session.userLogged});

    },//esta bien

    logout:(req,res)=>{
        res.clearCookie('userEmail')
        req.session.destroy();
        return res.redirect('/');
    }// esta bien
}

module.exports=usersController;