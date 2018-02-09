
module.exports=app=>{
  app.get('/api/customer', (req, res)=>{
    res.send(req.user)
  })
  app.post('/api/customer', (req, res)=>{

  })
}
