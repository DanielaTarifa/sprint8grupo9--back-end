const path = require('path');
let db = require('../../database/models');
//database/models');
const sequelize = db.sequelize;
const { Op, where } = require("sequelize");


const Users = db.User;
const Rols = db.Rol;


const userApiController={
    listar:(req,res)=>{
        db.User.findAll()
        .then(listarUser => {
            let array=[]
            
                for(let i=0; i < listarUser.length; i++){
                    let unUser={
                        id:listarUser[i].id,
                        name:listarUser[i].name,
                        //userName:userName[i],
                        email:listarUser[i].email,
                        detail: `http://localhost:3001/api/usuarios/`+ listarUser[i].id
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
        //http://localhost:3001/api/usuarios/
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
                        rolId:unUser.rol,
                        avatar: `http://localhost:3001/img/avatar/` + unUser.avatar,
                        
                    }
            }
            return res.status(200).json(respuesta)
        })
        .catch(error => {   res.send({error:'Not found'}); })

        //para buscarlo en postman
        //http://localhost:3001/api/usuarios/13
    }

}

module.exports=userApiController;