// database/database.js
import oracledb from "oracledb";
import dbConfig from "./config";

const initializeDatabase = async () => {
  try {
    await oracledb.createPool(dbConfig);
    console.log(
      "Conexão com o banco de dados Oracle estabelecida com sucesso!"
    );
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados Oracle:", error);
  }
};

export default initializeDatabase;
