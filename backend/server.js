
// need it to create the main express app
import express from "express"

import cors from "cors"

// 
import restaurants from "./api/restaurants.route.js"

const app = express()

app.use(cors())
app.use(express.json())

// this is express routes
app.use("/api/v1/restaurants", restaurants)

app.use("*", (req, res) => res.status(404).json({error:"not found"}))

// we will be seaprating the app.js and the server.js
export default app
