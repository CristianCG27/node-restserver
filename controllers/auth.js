const { response } = require("express");
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require("../helpers/generar-jwt");

const login = async(req, res = response) => {
  const { correo, password } = req.body;

  try {

    //verificar correo
    const usuario = await Usuario.findOne({correo});

    if (!usuario) {
        return res.status(400).json({
            msg: 'Usuario/constraseña no son correctos - correo'
        });
        
    }

    //Verificar si usuario está activo
    if (!usuario.estado) {
        return res.status(400).json({
            msg: 'Usuario/constraseña no son correctos - esatdo-false'
        });
        
    }

    //verificar contraseña

    const validPassword = bcryptjs.compareSync(password, usuario.password);

    if (!validPassword) {
        return res.status(400).json({
            msg: 'Usuario/constraseña no son correctos - contraseña'
        });
        
    }

    //Generar JWT

    const token = await generarJWT(usuario.id);



    res.json({
      msg: "Login OK",
      usuario,
      token
    });


  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Algo salió mal",
    });
  }
};

module.exports = {
  login,
};
