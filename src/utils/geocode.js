const request = require('request');

const geoCode = (address, geoCallBack) => {
    
    const geoUrl = `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(address)}.json?key=5wE2aIHpTRqs8N8KtSGAYhxjArLZOTsC&limit=1`;

    request({ url: geoUrl, json: true}, (error, response) => {
        if(error){
            geoCallBack(error, undefined)
        }
        else{
            const latitude = response.body.results[0]['position']['lat'];
            const longitude = response.body.results[0]['position']['lon'];
            const location = response.body.results[0]['address']['countrySubdivision'];
    
            let resultBody = {};
            resultBody.latitude = latitude;
            resultBody.longitude = longitude;
            resultBody.location = location;

            console.log(resultBody);

            geoCallBack(undefined, resultBody);
        }
    });
};



module.exports = {
    geoCode: geoCode
};