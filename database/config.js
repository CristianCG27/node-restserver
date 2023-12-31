const mongoose = require("mongoose");

const dbConection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN);

    console.log('Base de datos ONLINE');
  } catch (error) {
    console.log(error);
    throw new Error('Error en la conexión');
  }
};

module.exports = {
  dbConection,
};
