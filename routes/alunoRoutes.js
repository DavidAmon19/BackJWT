const express = require("express");
const router = express.Router();
const alunoController = require("../controllers/alunoController");

router.get('/', alunoController.usuarios)
router.post('/cadastro', alunoController.novoUsuario);
router.post('/login', alunoController.loginUsuario);



module.exports = router;