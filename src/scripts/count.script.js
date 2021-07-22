import fs from "fs";
import countService from "../services/count/count.service.js";

export default function runCountScript() {
  const countResult = countService.writeNbOfChildren()
  console.info(countResult)

  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist')
  }
  fs.writeFileSync('dist/count.json', JSON.stringify(countResult))
  console.info('the result is in the file : dist/count.json')
}
