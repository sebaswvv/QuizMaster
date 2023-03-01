import express from 'express';
const router = express.Router();
const UserController = require('../controllers/usercontroller');

router
    .route('/login')
    .post(UserController.login);

router
    .route('/register')
    .post(UserController.register);



module.exports = router;