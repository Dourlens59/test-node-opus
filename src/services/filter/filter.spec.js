import filterService from './filter.service.js'
import assert from 'assert';

describe('Check Filter Service', () => {
  const arg = 'ry'

  it('Check nb of results : 2', () => {
    const countries = filterService.filterAnimalsByText(arg)
    assert.equal(countries.length, 2);
  });

  it('Check animals include : RY', () => {
    const countries = filterService.filterAnimalsByText(arg)
    countries.forEach(({people}) => {
      assert.equal(people.animals.every(({name}) => name.includes(arg)), true)
    })
  })
});
