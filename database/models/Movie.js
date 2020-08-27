module.exports = function (sequelize, dataTypes){
    let alias = "Movie";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        release_date:  {
            type: dataTypes.DATE(),
            allowNull: false
        },
        length:  {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        genre_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
    }
    
    let config = {
        tableName : "movies", //nombre de la tabla //
        timestamps: true, //para saber las consultas de createdAt y updatedAt//
        underscored: true  //para permitir nombres de columnas que contengan guiones bajos //
    }

    let Movie = sequelize.define(alias, cols, config);

    return Movie;
}    