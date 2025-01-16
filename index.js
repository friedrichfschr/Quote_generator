const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const par_q = document.getElementById("quote")
const par_a = document.getElementById("author")

const getData = () => {

    axios.get('https://api.api-ninjas.com/v1/quotes', {
        headers: {
            'X-Api-Key': 'gPSGgMUtLTYk4Djtd3YQXA==YuDHT3wy0qgAqG4m'

        }
    } ).then(response => {
        console.log(response.data[0].quote);
        par_q.textContent = response.data[0].quote
        par_a.textContent = response.data[0].author
    })
};

// const sendData = () => {
//     axios.post('https://reqres.in/api/register', {
//         email: 'eve.holt@reqres.in',
//         // password: 'pistol'
//     }, {
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err, err.response);
//     })
// };


getBtn.addEventListener('click', getData);
// postBtn.addEventListener('click', sendData);