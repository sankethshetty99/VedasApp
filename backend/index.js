
// we created the express app in another module, but index is the entry point.
import app from "./server.js"

// mongodb nodejs driver
import mongodb from "mongodb"

// allows us to access our environmnet variables
import dotenv from "dotenv"

// loads in the env variables
dotenv.config()

// standard way for nodejs driver
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        poolSize: 50 ,
        wtimeout: 2500,
        useNewUrlParser: true
    }
)

.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
// why did we make this async?
.then(async client => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})