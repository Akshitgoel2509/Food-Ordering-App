// schema less - structure less - mongo db
// mongoose- schema
const mongoose=require('mongoose');
// const mongoURL='mongodb+srv://letsEAT:pZTJ2zAZ7vH7fnrC@cluster0.cgs0lch.mongodb.net/LETSEAT?retryWrites=true&w=majority&appName=Cluster0'
const mongoURL='mongodb://letsEAT:pZTJ2zAZ7vH7fnrC@ac-neml2dt-shard-00-00.cgs0lch.mongodb.net:27017,ac-neml2dt-shard-00-01.cgs0lch.mongodb.net:27017,ac-neml2dt-shard-00-02.cgs0lch.mongodb.net:27017/LETSEAT?ssl=true&replicaSet=atlas-12dfok-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
const mongoDB=async()=>{
await mongoose.connect(mongoURL,{useNewUrlParser:true},async(err,result)=>{
    if(err) console.log("---",err)
    else{
        console.log("connected to MongoDB");
        const fetched_data=await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function(err,data){
            const food_Category=await mongoose.connection.db.collection("food_Category");
            food_Category.find({}).toArray(function(err,catData){
                if(err) console.log(err);
                else{
                    global.food_items=data; 
                    global.food_Category=catData;
                } 
            })
            
        })
      }
});
}
mongoose.set('strictQuery', true);
module.exports=mongoDB;
// export default db;