const axios = require('axios').default;

const { parse } = require('json2csv');

const fields = ['userId', 'id', 'title', 'completed'];
const opts = { fields };

axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
        const csv = parse(res.data);
        //console.log(csv);  // uncomment this to view output
    })

var promise = axios.get('https://jsonplaceholder.typicode.com/todos')
promise.then(function(data){
    console.log(data.data)
})