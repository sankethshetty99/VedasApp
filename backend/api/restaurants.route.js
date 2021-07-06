// because we need access to the express Router design pattern
import express from "express"

// This file is a router we use for a certain path /api/v1/restaurants, this is the standard way of defining.
const router  = express.Router()

// standard way
router.route("/").get((req,res) => res.send("hello world"))

export default router