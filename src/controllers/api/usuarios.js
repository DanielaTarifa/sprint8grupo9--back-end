const path = require('path');
let db = require('../../database/models');
//database/models');
const sequelize = db.sequelize;
const { Op, where } = require("sequelize");


const Users = db.Users;
const Rols = db.Rols;


const userApiController={
    listar:(req,res)=>{
        db.Users.findAll()
        .then(listarUser => {
            let array=[]
            
                for(let i=0; i < listarUser.length; i++){
                    let unUser={
                        id:listarUser[i].id,
                        name:listarUser[i].name,
                        //userName:userName[i],
                        email:listarUser[i].email,
                        detail: 'api/listarUser/'+ listarUser[i].id
                    }
                    array.push(unUser)
                }

                let respuesta={
                    count: listarUser.length,
                    users: array
                }
            
                return res.status(200).json(respuesta)
        })
        .catch(error => {res.send({error:'Not found'});})

        //para buscarlo en postman
        //http://localhost:3000/api/usuarios/
    },
    detalle:(req,res)=>{
        Users.findByPk(req.params.id)
        .then(unUser => {
            let respuesta={
                    user: {
                        id:unUser.id,
                        name:unUser.name,
                        lastName:unUser.lastname,
                        userName:unUser.userName,
                        email:unUser.email,
                        cel:unUser.cel,
                        rol:unUser.rol,
                        avatar: '/public/img/avatar/' + unUser.avatar,
                        
                    }
            }
            return res.status(200).json(respuesta)
        })
        .catch(error => {   res.send({error:'Not found'}); })

        //para buscarlo en postman
        //http://localhost:3000/api/usuarios/13
    }

}

module.exports=userApiController;