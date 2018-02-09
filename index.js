var express= require ('express');
var bodyParser= require('body-parser')
var mongoose= require('mongoose');
var RequestController = require('./RequestController')

var app = express();
var port= process.env.PORT || 5000;
const mongoURI= `mongodb://localhost:5000`

 // future database name currently called test

app.use( express.static( __dirname + "/app") );
app.use(bodyParser.json());

mongoose.connect(mongoURI);
mongoose.connection.once(`open`,function(){
  console.log(`Connected to mongo at: `, mongoURI)
})




require('./routes/customerRoutes')(app)

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))

  const path=require('path')
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build', 'index.html'))
  })
}
app.listen(port, function(){
  console.log('Express listening on '+ port)
})
