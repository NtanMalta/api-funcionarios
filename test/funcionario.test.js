<<<<<<< HEAD
const request = require ("supertest")

const app = require("../app")

//teste

describe("API de funcionarios",()=>[

    it("Deve cadastrar um funcionario",async()=>{
=======
const request = require("supertest");
const app = require("../src/app");
const sequelize = require("../src/config/database");



afterAll(async()=>{

    await sequelize.close();

});

describe("API Funcionarios",()=>{

    it("Deve cadastrar funcionario", async()=>{
>>>>>>> upstream/master

        const resposta = await request(app)
        .post("/funcionarios")
        .send({
<<<<<<< HEAD
            nome:"maria",
            cargo:"Analista"
        })

        expect(resposta.statusCode).toBe(201)

        expect(resposta.body.nome).toBe("maria")

        expect(resposta.body.cargo).toBe("Analista")

    })
])
=======
            nome:"Maria",
            cargo:"Analista"
        });

        expect(resposta.statusCode).toBe(201);

    });

});
>>>>>>> upstream/master
