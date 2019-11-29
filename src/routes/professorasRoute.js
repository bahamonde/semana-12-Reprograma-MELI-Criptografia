const express = require("express")
const router = express.Router()
const controller = require("../controllers/professorasController")
const authMiddleware = require ("../middlewares/auth")


//por conta da criptografia, tem que ficar nessas posicoes (get e post geral "fora" do "escopo" da autenticacao)
router.get("/", controller.get)
router.post("/", controller.post)
router.use(authMiddleware)
router.get("/:id", controller.getById)

module.exports = router
