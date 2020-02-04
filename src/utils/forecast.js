const request = require('request')

const forecast = (latitude,longitude,callback)=>{

    const url = 'https://api.darksky.net/forecast/205e5fcb893dfafb96e786c24be0e262/'+longitude+','+latitude

request({url, json: true}, (error, {body} = response) => {
   if(error){
       //console.log('Unable to connect to weather service!')
       callback('Unable to connect to weather service!',undefined)
   } else if(body.error){
       //console.log('Unable to find location')
       callback('Unable to find location!',undefined)

   } else {
    //console.log(response.body.daily.data[0].summary +'It is currently '+response.body.currently.temperature+'degrees out. There is a '+response.body.currently.precipProbability+'% chance of rain')
    //console.log(body.daily.data[0])
    callback(undefined,body.daily.data[0].summary +'It is currently '+body.currently.temperature+'degrees out. The high today is '+body.daily.data[0].temperatureHigh+' and low of '+body.daily.data[0].temperatureLow+'. There is a '+body.currently.precipProbability+'% chance of rain')
   }
    
 })


}

 








module.exports = forecast