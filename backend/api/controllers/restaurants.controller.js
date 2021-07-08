// This is the controller in MVC
    // handles user req flow
    // never handles data logic


import RestaurantsDAO from "../../dao/restaurantsDAO.js"

// a controllers are just custom middlware.
export default class RestaurantsController {
    // called from a URL, there will be query strings
  static async apiGetRestaurants(req, res, next) {
    const restaurantsPerPage = req.query.restaurantsPerPage ? parseInt(req.query.restaurantsPerPage, 10) : 20
    const page = req.query.page ? parseInt(req.query.page, 10) : 0
    // arent filters passed on as well ?

    // yes there are !!! we are just getting the 3 values.
    // notice how we are not querying the database here, we are just reconstructing the appropriate request that needs to be handed out to the DAO
    // the actual querying will be done in the DAO
    let filters = {}
    if (req.query.cuisine) {
      filters.cuisine = req.query.cuisine
    } else if (req.query.zipcode) {
      filters.zipcode = req.query.zipcode
    } else if (req.query.name) {
      filters.name = req.query.name
    }

    const { restaurantsList, totalNumRestaurants } = await RestaurantsDAO.getRestaurants({
      filters,
      page,
      restaurantsPerPage,
    })

    // constructing the response
    let response = {
      restaurants: restaurantsList,
      page: page,
      filters: filters,
      entries_per_page: restaurantsPerPage,
      total_results: totalNumRestaurants,
    }

    // sending back the response
    res.json(response)
  }
}