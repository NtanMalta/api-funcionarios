const express = require("express")

const app = express()

app.use(express.json())


//banco de dados em memoria
const funcionarios = []


//roda para cadastrar
app.post("/funcionarios", (req,res)=>{

    const {nome,cargo} = req.body
    const funcionario = (
        nome,
        cargo
    )
    funcionarios.push(funcionario)
    res.status(201).json(funcionario)

})

app.get("/funcionarios", (req,res)=>{

    res.status(200).json(funcionario)
})

module.exports = app