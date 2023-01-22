import clientPromise from "../../lib/mongodb"


export default async function handler(req, res){
    
    console.log("in",req.body),
    console.log("innn");
    const db=await clientPromise
    const datb=db.db("provast")
    console.log("conn")
    const details=JSON.parse(JSON.stringify(req.body))
    console.log(details.email)

    await datb.collection("details").findOneAndUpdate({"username":details.email},{$set:JSON.parse(JSON.stringify(req.body))})
    console.log("found")
    const data=await datb.collection("details").find({}).toArray()
    res.json({"done":data})
}