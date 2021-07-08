
// need it to create the main express app
import express from "express"

import cors from "cors"

// We import different routes and bundle them into the main app in this file
import restaurants from "./api/routes/restaurants.route.js"
//import route1 from "./api/route1.js"
//import route2 from "./api/route2.js"
//import route3 from "./api/route3.js"
//import route4 from "./api/route4.js"

// the vanilla instance 
const app = express()

// configuring the instance
app.use(cors())
app.use(express.json())

// this is express routes
app.use("/api/v1/restaurants", restaurants)
//app.use("/api/v1/route1", route1)
//app.use("/api/v1/route2", route2)
//app.use("/api/v1/route3", route3)
//app.use("/api/v1/route4", route4)

// default route if nothing works 
app.use("*", (req, res) => res.status(404).json({error:"not found"}))

// we will be seaprating the app.js and the server.js
export default app
