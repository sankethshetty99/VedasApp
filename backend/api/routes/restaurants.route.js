// because we need access to the express Router design pattern
// there will be many routes, for different paths
import express from "express"

// import the controller file. Routes use controller files
import RestaurantsCtrl from "../controllers/restaurants.controller.js"

// This file is a router we use for a certain path /api/v1/restaurants, this is the standard way of defining.
// vanilla instance
const router  = express.Router()

// standard way, but this must somehow connect to the database and retrieve 
// controllers are just a bunch of route handlers, we could have defined the call back function here
// THIS is where the path is linked to an actual JS function to handle.
// defining the actual function in another file (controller files) helps make the code clean and separate concerns
router.route("/")
    .get(RestaurantsCtrl.apiGetRestaurants)

export default router