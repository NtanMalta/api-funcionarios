const request = require ("supertest")

const app = require("../app")

//teste

describe("API de funcionarios",()=>[

    it("Deve cadastrar um funcionario",async()=>{

        const resposta = await request(app)
        .post("/funcionarios")
        .send({
            nome:"maria",
            cargo:"Analista"
        })

        expect(resposta.statusCode.toBe(201))

        expect(resposta.body.nome).toBe("maria")

        expect(resposta.body.cargo).toBe("Analista")

    })
])