var axios = require('axios').default
async function performCall() {
    let data = await axios.get('https://reqjsonplaceholder.typicode.com/todos')
    if (data) {
        console.log(data.data)
        console.log(data.status)
    }
}

performCall()