// ##############################################################
// REQUIRE MODULES
// ##############################################################
const pool = require('../services/db');



// ##############################################################
// DEFINE INSERT OPERATION FOR TREE
// ##############################################################
module.exports.insertSingle = (data, callback) =>
    {
        const SQLSTATMENT = `
        INSERT INTO  tree (species,age,height,user_id)
        VALUES (?, ?, ?, ?);
        `;
    const VALUES = [data.species , data.age , data.height , data.user_id];
    
    pool.query(SQLSTATMENT, VALUES, callback);
    }

// ##############################################################
// DEFINE SELECT ALL OPERATIONS FOR TREE
// ##############################################################


// ##############################################################
// DEFINE SELECT BY ID OPERATIONS FOR TREE
// ##############################################################

module.exports.selectById = (data, callback) =>
    {
        const SQLSTATMENT = `
        SELECT * FROM tree
        WHERE id = ?;
        `;
    const VALUES = [data.id];
    
    pool.query(SQLSTATMENT, VALUES, callback);
    }

// ##############################################################
// DEFINE UPDATE OPERATIONS FOR TREE
// ##############################################################

module.exports.updateById = (data, callback) =>
    {
        const SQLSTATMENT = `
        UPDATE tree 
        SET species = ?, age = ?,height = ?, user_id = ?
        WHERE id = ?;
        `;
    const VALUES = [data.species, data.age, data.height, data.user_id, data.id];
    
    pool.query(SQLSTATMENT, VALUES, callback);
    }
// ##############################################################
// DEFINE DELETE OPERATIONS FOR TREE
// ##############################################################
module.exports.deleteById = (data, callback) =>
    {
        const SQLSTATMENT = `
        DELETE FROM tree
        WHERE id = ?;
        `;
    const VALUES = [data.id];
    
    pool.query(SQLSTATMENT, VALUES, callback);
    }