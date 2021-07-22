import countryApi from '../../api/country.api.js'

class filterService {

  filterAnimalsByText(valueToFilter) {
    const countries = countryApi.fetchCountries()

    return countries.reduce((acc, country) => {
      country.people.forEach(people => {
        people.animals = this.getAnimalFilter(people, valueToFilter)
        if (people.animals.length > 0) {
          acc.push({name: country.name, people})
        }
      })
      return acc
    }, [])
  }

  getAnimalFilter(people, valueToFilter) {
    return people.animals.filter(({name}) => name.includes(valueToFilter))
  }
}

export default new filterService()



