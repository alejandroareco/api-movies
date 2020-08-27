module.exports = function (sequelize, dataTypes){
    let alias = "Serie";

    let cols = {
        id: {
          type: dataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: dataTypes.STRING(500),
        allowNull: true
      },
      release_date: {
        type: dataTypes.DATE
      },
      end_date: {
        type: dataTypes.DATE
      }
    };
    
    let config = {
        tableName : "series", //nombre de la tabla //
        timestamps: false, //para saber las consultas de createdAt y updatedAt//
        underscored: true  //para permitir nombres de columnas que contengan guiones bajos //
    }

    let Serie = sequelize.define(alias, cols, config);

    return Serie;
}    