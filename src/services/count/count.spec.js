import countService from './count.service.js'
import assert from 'assert';

describe('Check Count Service', () => {

  it('Check nb of results : 5', () => {
    const countries = countService.writeNbOfChildren()
    assert.equal(countries.length, 5);
  });

  it('Check the number of child', () => {
    const countries = countService.writeNbOfChildren()
    countries.forEach((country) => {
      const nbOfPeoples = getNumber(country.name)
      assert.equal(nbOfPeoples, country.people.length)

      country.people.forEach(people => {
        const nbOfAnimals = getNumber(people.name)
        assert.equal(nbOfAnimals, people.animals.length)
      })
    })
  })

  function getNumber(name) {
    return name.substring(name.length - 2, name.length - 1)
  }
});
