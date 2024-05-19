// ##############################################################
// REQUIRE MODULES
// ##############################################################
const model = require("../models/treesModel.js");
// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR CREATE TREE
// ##############################################################


module.exports.createNewTree = (req, res, next) =>
    {
        const data = {
          

            species: req.body.species,
            age: req.body.age,
            height: req.body.height,
            user_id: req.body.user_id,
           
        }
    
        if (req.body.species == undefined || req.body.age == undefined || req.body.height == undefined || req.body.user_id == undefined ){
            return res.status(400).json({message: "Missing required data"})
        } 
    
        const callback = (error, results) => 
        {
            if (error) {
                return res.status(500).json({message: "Internal server error"})
            } else {
                return res.status(201).json({
                    message: "Tree",
                    treeId: results.insertId
                })
            }
        }
    
        model.insertSingle(data, callback)
    }


// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR READ ALL TREES
// ##############################################################


// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR READ TREE BY ID
// ##############################################################

module.exports.readTreeById = (req, res, next) =>
    {
        const data = {
            id: req.params.id
        }
    
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error readPlayerById:", error);
                res.status(500).json(error);
            } else {
                if(results.length == 0) 
                {
                    res.status(404).json({
                        message: "Player not found"
                    });
                }
                else res.status(200).json(results[0]);
            }
        }
    
        model.selectById(data, callback);
    }
// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR UPDATE TREE BY ID
// ##############################################################

module.exports.updateTreeById = (req, res, next) =>
    {
        if(req.body.species == undefined || req.body.age == undefined || req.body.height == undefined || req.body.user_id == undefined) 
        {
            res.status(400).json({
                message: "Missing required data"
            });
            return;
        }
    
        const data = {
            id:req.params.id,
            species: req.body.species,
            age: req.body.age,
            height: req.body.height,
            user_id: req.body.user_id
        }
    
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error updatePlayerById:", error);
                res.status(500).json(error);
            } else {
                if(results.affectedRows == 0) 
                {
                    res.status(404).json({
                        message: "Tree not found"
                    });
                }
                else res.status(204).send(); // 204 No Content
            }
        }
    
        model.updateById(data, callback);
    }

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR DELETE TREE BY ID
// ##############################################################


module.exports.deleteByTreeId = (req, res, next) =>
    {
        const data = {
            id: req.params.id
        }
    
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error deletePlayerById:", error);
                res.status(500).json(error);
            } else {
                if(results.affectedRows == 0) 
                {
                    res.status(404).json({
                        message: "Tree not found"
                    });
                }
                else res.status(204).send(); // 204 No Content            
            }
        }
    
        model.deleteById(data, callback);
    }