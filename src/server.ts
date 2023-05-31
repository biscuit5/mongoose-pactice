
import mongoose from "mongoose";
import app from "./app"
const port = 5000;

async function bootstrap() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/partices-mongoose');
        console.log(`database conected`);
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
    }catch(err){
        console.log(`faild to database conect`);
    }
  
  }
  bootstrap();



