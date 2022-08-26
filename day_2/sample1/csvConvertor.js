const { parse } = require('json2csv');

const fields = ['field1', 'field2', 'field3'];
const opts = { fields };

var myData=[{'field1':'ab','field2':'30','field3':'40'},{'field1':'ab','field2':'30','field3':'40'}]

try {
  const csv = parse(myData, opts);
  console.log(csv);
} catch (err) {
  console.error(err);
}