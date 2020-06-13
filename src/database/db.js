//importar a depencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciando o objeto de DB que faz as operaçoes
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//usando o objeto de banco de dados, para nossas operações 


db.serialize(() => {
  //Criando uma tabela
//  db.run(`
//    CREATE TABLE IF NOT EXISTS places (
//      id INTEGER PRIMARY KEY AUTOINCREMENT,
//      image TEXT,
//      name TEXT,
//      address TEXT,
//      address2 TEXT,
//      state TEXT,
//      city TEXT,
//      items TEXT 
//    );
//  `)
//  //Inserir dados
//  const query = `
//    INSERT INTO places (
//      image,
//      name,
//      address,
//      address2,
//      state,
//      city,
//      items
//    ) VALUES (?,?,?,?,?,?,?);
//  `
//
//const values = [
  //  "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  //  "Colectoria",
  //  "Benedito Saturino",
  //  "N°, 1000",
  //  "Minas Gerais",
  //  "Sabará",
  //  "Resíduos eletrônicos e lâmpadas"
  //]
  //[
  //  "https://images.unsplash.com/photo-1555606090-1640be5631c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80",
  //  "Papersider",
  //  "Benedito Saturino",
  //  "N°, 1100",
  //  "Minas Gerais",
  //  "Sabará",
  //  "Papeis e papelão"
  //]

//  function afterInsertData(err) {
//    if(err) {
//      return console.log (err)
//    }
//    console.log("Cadastro Finalizado!")
//    console.log(this)
//    
//  }
//
//  //db.run(query, values, afterInsertData)
//       
//  //Consultar dados
//  db.all(`SELECT * FROM places`, function(err,rows) {
//    if(err) {
//      return console.log(err)
//    }
//    console.log("Registros encontrados: ")
//    console.log(rows)
//  }) 
  //Deletar dados
//  db.run(`DELETE FROM places WHERE id = ?`, [2], function(err) {
//    if(err) {
//      return console.log(err)
//    }
//    console.log("Registro Deletado")
//  })

})
