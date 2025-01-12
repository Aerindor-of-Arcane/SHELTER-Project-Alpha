const express = require('express');
const router = express.Router();
const deviceDataController = require('../controllers/deviceDataController');

router.get('/data', deviceDataController.getAllData);
router.post('/data', deviceDataController.createMockData);

module.exports = router;