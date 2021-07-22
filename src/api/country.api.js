import {data as countries}  from '../models/data.js'

class CountryApi {

  fetchCountries() {
    return countries
  }
}

export default new CountryApi()
