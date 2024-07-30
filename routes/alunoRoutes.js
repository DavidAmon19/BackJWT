const express = require("express");
const router = express.Router();
const alunoController = require("../controllers/alunoController");
const authenticateToken = require("../middleware/authMiddleware")

router.get('/', alunoController.usuarios)
router.post('/cadastro', alunoController.novoUsuario);
router.post('/login', alunoController.loginUsuario);

router.get('/profile', authenticateToken, (req, res) => {
    res.json({ message: `Bem-vindo, usuário com email: ${req.user.email}` });
});

module.exports = router;