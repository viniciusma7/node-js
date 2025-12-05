const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@nodejsteste.rfhnezb.mongodb.net/?appName=NodeJsTeste`
    );
    console.log("Conectado ao MongoDB!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

module.exports = connectDb;