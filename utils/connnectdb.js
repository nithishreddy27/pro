import mongoose from "mongoose"

const connection={};
async function connectdb(){
    if(connection.isConnected){
        return;
    }
    const db=await mongoose.connect("mongodb://localhost:27017/test")
    connection.isConnected=db.connections[0].readyState;
}

export default connectdb;