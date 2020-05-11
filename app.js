const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

//lugar.getLugarLatLng(argv.direccion)
//  .then(console.log)

//clima.getClima(-88.9167000, 13.8333000)
//.then(console.log)
// .catch(err => {
//   console.log('error' + err)
//})
const getinfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lngitud);
        return `El clima de ${coordenadas.direccion} es de ${temp}`;
    } catch {
        return `No se pudo determinar el clima de ${direccion}`
    }
}

getinfo(argv.direccion)
    .then(console.log)
    .catch(console.log)