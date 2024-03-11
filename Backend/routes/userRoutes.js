const express = require('express');
const router = express.Router();

const {
    registerUser,
    loginUser,
    getMe,
    updateUser,
    deleteUser,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', (req, res) => {
    res.send('Hello, Express!');
});

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/getMe:id', protect, getMe);

router.put('/updateUser/:id', protect, updateUser);

router.delete('/deleteUser/:id', protect, deleteUser);

module.exports = router;