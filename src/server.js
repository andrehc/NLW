const express = require("express")
const server = express()

//configura a pasta public 
server.use(express.static("public"))



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
  return res.render("create-point.html")
})
server.get("/search", (req, res) => {
  return res.render("search-results.html")
})



//Inicia o servidor na porta 3000 localhost:3000
server.listen(3000)