const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET REQUESTS TO RENDER PAGES */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.get('/update/:id', skillsCtrl.showUpdate);

/* POST CRUD API*/
router.post('/create', skillsCtrl.create);
router.post('/update/:id', skillsCtrl.update);
router.post('/delete/:id', skillsCtrl.delete);


// router.delete('/:id', skillsCtrl.delete);
router.get('/:id/edit', skillsCtrl.edit);

module.exports = router;