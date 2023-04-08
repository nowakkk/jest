const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { 
            firstName: "Krzysztof",
            lastName: "Nowak"
        }
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => {
            return res.data
        })
        .catch(err => 'error')
}

module.exports = functions;