module.exports = function (sequelize, dataTypes){
  let alias = "Serie";
  
  let cols = {
    id: {
      type: dataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: dataTypes.STRING(500),
      allowNull: false
    },
    release_date: {
      type: dataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: dataTypes.DATE,
      allowNull: false
    }
  };
  
  let config = {
    tableName : "series", //nombre de la tabla //
    timestamps: true, //para saber las consultas de createdAt y updatedAt//
    underscored: true  //para permitir nombres de columnas que contengan guiones bajos //
  }
  
  let Serie = sequelize.define(alias, cols, config);
  
  return Serie;
}    