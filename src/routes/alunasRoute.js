const express = require("express")
const router = express.Router()
const controller = require("../controllers/alunasController")
const authMiddleware = require ("../middlewares/auth")


//por conta da criptografia, tem que ficar nessas posicoes (get e post geral "fora" do "escopo" da autenticacao)
router.get("/", controller.get)
router.post("/", controller.post)
router.use(authMiddleware)
router.get("/nasceuSp", controller.getSp)
router.get("/:id", controller.getById)
router.get("/:id/books", controller.getBooks)
router.get("/:id/getAge", controller.getAge)
router.post("/:id/books", controller.postBooks)

module.exports = router
