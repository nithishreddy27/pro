import StudentDetails from "../../model/register"
import connectdb from '../../utils/connnectdb'
import clientPromise from "../../lib/mongodb"


// connectdb()
export default async function signup(req, res) {
  try {
    // await StudentDetails.create(req.body)
    // res.status(200).send({ done: true })

    const db=await clientPromise
    const datb=db.db("provast")
    console.log("conn")
    // const d=JSON.parse(JSON.stringify(req.body))
    await datb.collection("details").insertOne(JSON.parse(JSON.stringify(req.body)))
    // const data=await datb.collection("details").find({}).toArray()
    // const e=d.email
    // res.redirect("/addDetails")
    res.status(200).send({ done: true })

  } catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }
}
