const db = require('../database/models');

module.exports = {
    getAll: function(req,res) {
        db.Serie.findAll()
        .then(function(result){
            return res.status(200).json(result)
        })
    },
    getById: function(req,res) {
        db.Serie.findByPk(req.params.id)
        .then(function(result){
            return res.status(200).json(result)
        })
    },
    create:function(req,res){
        db.Serie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        })
        .then(function(result) {
            return res.status(200).json(result)
        })
        .catch(function(error) {
            console.log(error);
        })
    }    
};    