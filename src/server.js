const express = require("express")
//primeiro passo eu preciso criar uma constante para chamar(importar) o pacote expression que já foi instalado la no node_modules
const server = express()
//o valor atribuido á função express criada acima foi a requizição express que agora é chamada para executar por outra constante server
const routes = require("./routes")
const path = require("path")

//usando template engine
server.set('view engine', 'ejs')

//mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

//Habilitar arquivos estáticos
server.use(express.static("public"))

//usar i req/body
server.use(express.urlencoded({ extended: true }))

//routes
server.use(routes)
server.listen(3000, () => console.log('rodando'))
//a funcionalidade listen() vai ligar o servidor na porta que queremos assim que abrir roda uma funçao desta forma uma arrowFunction 
