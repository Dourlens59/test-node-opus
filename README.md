# Javascript developer test

## Filter

The result will be displayed in the console, as well as in the file : `dist/filter.json`

- In the following file `data.js`, there are `Countries` containing `Peoples` containing `Animals`.
- Only animals containing `ry` are displayed. The order should be kept intact.
- Empty array after filtering are NOT returned.

Sample of running the command, and its output:

```shell script
$ node app.js --filter=ry
OR
$ npm run filter
```

## Count

Print the counts of People and Animals by counting the number of children and appending it in the name, eg. `Satanwi [2]`.

Sample of running the command, and its output:

```shell script
$ node app.js --count
Or
$ npm run count
```

## Test
Install the dependency before execute the tests
```shell script
$ npm run install
AND
$ npm run test
```
