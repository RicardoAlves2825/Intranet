const express = require("express");
const app = express();
const Usuarios = require("./models/Usuarios")
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");


//config
//Template Engine 
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//conexão com o banco de dados

//Rotas
app.get("/", function (req, res) {
    Usuarios.findAll().then(function (usuarios) {
        res.render('home', { usuarios: usuarios })
    })

});


app.get("/cad", function (req, res) {
    //res.send("Cadastro de usuarios")
    res.render('formulario')
});

app.post('/add', function (req, res) {
    res.send("Nome: " + req.body.nome)
    Usuarios.create({
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade,
        senha: req.body.senha
    }).then(function () {
        console.log("Cadastrado com sucesso!");
    }).catch(function (erro) {
        console.log("Falha ao cadastrar: " + erro);
    });
});


app.listen(8080, function () {

    console.log("Servidor iniciado na URL: http://localhost:8080");
});





