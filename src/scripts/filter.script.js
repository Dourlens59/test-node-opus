import fs from "fs";
import filterService from "../services/filter/filter.service.js";

export default function runFilterScript(valueToFilter) {
  const filterResult = filterService.filterAnimalsByText(valueToFilter)
  console.info(filterResult)

  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist')
  }
  fs.writeFileSync('dist/filter.json', JSON.stringify(filterResult));
  console.info('the result is in the file : dist/filter.json')
}
