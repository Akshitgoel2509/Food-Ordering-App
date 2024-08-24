/* eslint-disable no-undef */

const express=require("express");
const app = express() 
const port = 4000;
const mongoDB=require( './db')
mongoDB();

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Accept,Authorization",
  );
  next();
})



app.get('/', (req, res) => {   
  res.send('Hello World!')
})

app.use(express.json())
app.use('/api', require('./Routes/createUser'));
app.use('/api',require('./Routes/DisplayData'));
app.use('/api',require("./Routes/OrderData"));

app.listen(port, () => {
  console.log(`food ordering app listening on port ${port}`)
})

