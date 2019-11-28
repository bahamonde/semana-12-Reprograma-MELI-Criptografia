const jwt = require ('jsonwebtoken');
const authConfig = require ('../config/auth');
const alunas = require ('../model/alunas.json');
// const bcrypt = require ("bcrypt")

exports.getToken = (req, res) => {
    const { name } = req.body;
    const user = alunas.find(e => e.nome == name)

    if (!user) {
        return res.status(401).json({error: "user not found" });
    }

const {id, nome} = user;

console.log(nome)
try{
    return res.json({
        user: {
            id,
            nome,
        },
        token: jwt.sign({id}, authConfig.secret, {
            expiresIn: authConfig.expiresIn,
        }),
    });
} catch (e) {
    return res.status(401).json({ error: 'erro'})
}
}