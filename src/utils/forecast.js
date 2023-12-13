
const request = require('request');

const forecast = (lat, lon, forecastCallBack) => {
    const forecastUrl = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=765910c029584598ab0ebf5783ca7836`;
        request({ url: forecastUrl, json: true}, (error, response) => {

            if(error){
                forecastCallBack(error, undefined)
            }
            else{
                const result = `The current temp is ${response.body.data[0]['temp']} degrees out there. But it feels like ${response.body.data[0]['app_temp']} degrees.`;
                forecastCallBack(undefined, result);
            }
        })
}

module.exports = {
    forecast: forecast
};




