const axios = require('axios');

const getClima = async(lat, lngitud) => {
    //agregar el https://
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lngitud}&appid=d70a7bb71a4e8de5634711b22e394745&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}