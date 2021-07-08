

// this is the server.js which makes the express app that is constructed under the hood available to the external world as a server.


// we created the express app in another module, but index is the entry point.
import app from "./app.js"

// mongodb nodejs driver
import mongodb from "mongodb"

// allows us to access our environmnet variables
import dotenv from "dotenv"

// loads in the env variables
dotenv.config()

// restaurantDAo is where the actual connection to DB collection is being made., we need to import it here
import RestaurantsDAO from "./dao/restaurantsDAO.js"

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
// why did we make this async? coz we need to use await inside the function
.then(async client => {
    // we await because we dont want to move ahead starting the server without connecting with the database.
    await RestaurantsDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})