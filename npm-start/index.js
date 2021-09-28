const axios = require('axios');

const ROOT_URL = 'https://jsonplaceholder.typicode.com'

const getData = async urlRoute => {
    try {
        let res = await axios.get(`${ROOT_URL}/${urlRoute}`)
        console.log(res)
    } catch(e) {
        console.log(e)
    }
}

// getData('users')
getData('users')