import countryApi from "../../api/country.api.js";

class CountService {

  writeNbOfChildren() {
    const countries = countryApi.fetchCountries()
    return countries.map((country) => {
      country.name = this.refactorName(country.name, country.people.length)
      country.people.map(people => people.name = this.refactorName(people.name, people.animals.length))
      return country
    })
  }

  refactorName(name, length) {
    return `${name} [${length}]`
  }

}

export default new CountService()



