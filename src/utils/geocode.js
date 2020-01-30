const request = require('request')

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoibW5hcmVzaCIsImEiOiJjazR5aTl6OGgwMHY5M3VwZ3puNTlzM3lpIn0.Uyjt0Y2A4rv2OR273NA0Qg'

    request({url, json:true}, (error, {body} = response) =>{

        if(error){
            callback('Unable to connect to location services!', undefined)
        } else if(body.features.length === 0){
            callback('Unable to find location. Try another search.',undefined)
        } else {

            callback(undefined,{
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })

        }

    })
}

module.exports = geocode