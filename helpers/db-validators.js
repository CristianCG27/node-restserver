const { Categoria, Usuario, Producto } = require("../models");
const Role = require("../models/role");

const esRolValido = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no está registrado en la BD`);
  }
};

const emailExiste = async (correo = "") => {
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    throw new Error(`El correo ya existe`);
  }
};

const existeUsuarioPorId = async (id) => {
  const existeUsuario = await Usuario.findById(id);
  if (!existeUsuario) {
    throw new Error(`El ID: ${id} no existe`);
  }
};

const existeCategoria = async(id) =>{
  const existeCategoria = await Categoria.findById(id);
  if (!existeCategoria) {
    throw new Error(`El ID: ${id} no existe`);
  }

};

const existeProducto = async(id) =>{
  const existeProducto = await Producto.findById(id);
  if (!existeProducto) {
    throw new Error(`El ID: ${id} no existe`);
  }

};

// const yaExisteProducto = async(nombre = "") =>{
  
//   const yaExisteProducto = await Producto.findOne({ nombre });
//   if (yaExisteProducto) {
//     throw new Error(`El producto ya esta registrado en la DB`);
//   }

// };


module.exports = {
  esRolValido,
  emailExiste,
  existeUsuarioPorId,
  existeCategoria,
  existeProducto,
};
