import server from './server.js'
const porta = process.env.PORT || 3001

server.listen(porta, err => {
  if (err) throw err

  console.log(`Server is running! Port: ${porta}`)
})
