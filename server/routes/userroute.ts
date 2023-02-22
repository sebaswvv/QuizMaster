import express from 'express';
const router = express.Router();
const UserController = require('../controllers/usercontroller');

router
    .route('/login')
    .post(UserController.login);



module.exports = router;