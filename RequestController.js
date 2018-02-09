var Requests = require('./models/Requests');

module.exports ={

  createRequest: function(req, res){
    Requests.insert(req.body, function(err, result){
      if( err ){
        return res.status(500).json(err);
      } else{
        res.json(result);
      }
    })
  },


  getRequests: function(req, res){
    Requests.read(req.body, function(err, result){
      if (err){
        return res.status(500).json(err);
      } else{
        res.json(result);
      }
    })
  }
}
