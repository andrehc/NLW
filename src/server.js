const express = require("express")
const server = express()

//importando o db
const db = require("./database/db")
//configura a pasta public 
server.use(express.static("public"))

//Habilita o uso da req.body na aplicação
server.use(express.urlencoded({ extended: true }))

//template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true

})


//ROTAS
//configura caminhos da pagina inicial
//pagina inicial usando req(requisicao) res(reposta)
server.get("/", (req, res) => {
  return res.render("index.html", {})
})
server.get("/create-point", (req, res) => {

  //console.log(req.query)



  return res.render("create-point.html")

})

server.post("/savepoint", (req, res) => {

  //req.body: Retornará com o corpo do Formulario
  //console.log(req.body)
  
  //Inserir dados
  const query = `
    INSERT INTO places (
      image,
      name,
      address,
      address2,
      state,
      city,
      items
    ) VALUES (?,?,?,?,?,?,?);
  `
  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ]
  

  function afterInsertData(err) {
    if (err) {
      console.log(err)
      return res.send("Erro no cadastro!")
    }
    console.log("Cadastro Finalizado!")
    console.log(this)

    return res.render("create-point.html",{ saved: true })
  }

  db.run(query, values, afterInsertData)

  
})

server.get("/search", (req, res) => {


  const search = req.query.search
  if(search == "") {
    //pesquisa vazia
    return res.render("search-results.html",{total: 0})
  } 


  //pegar os dados inseridos do banco de dados e exibir na pagina de search
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
    if (err) {
      return console.log(err)
    }
    console.log("Registros encontrados: ")
    console.log(rows)

    const total = rows.length

    //mostra a pagina ja com os dados do DB
    return res.render("search-results.html", { places: rows, total })
  })


})



//Inicia o servidor na porta 3000 localhost:3000
server.listen(3000)