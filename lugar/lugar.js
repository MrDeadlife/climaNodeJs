const axios = require('axios');


const getLugarLatLng = async(dir) => {

    //convierte los caracteres con espacio en un caracter seguro = El salvador | El%salvador
    const encodeurl = encodeURI(dir);
    // console.log(encodeurl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeurl}`,
        headers: { 'x-rapidapi-key': '0ace5f220cmshaf32932d525bdecp191a75jsnc4660505bfff' }
    });

    //trae la informacion y la almacena en resp
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lngitud = data.lon;

    return {
        direccion,
        lat,
        lngitud
    }

}

module.exports = {
    getLugarLatLng
}