// ##############################################################
// REQUIRE MODULES
// ##############################################################
const controller = require('../controllers/treesController');
const express = require('express');
// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();

// ##############################################################
// DEFINE ROUTES
// ##############################################################
// router.get('/', controller.readAllPlayer);
router.post('/', controller.createNewTree);

router.get('/:id', controller.readTreeById);
router.put('/:id', controller.updateTreeById);
router.delete('/:id', controller.deleteByTreeId);

// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;