import express from 'express';
const router = express.Router();
const TestController = require('../controllers/testcontroller');

router
    .route('/')
    .get(TestController.getAllTests);

module.exports = router;