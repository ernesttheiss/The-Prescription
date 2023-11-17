function convertToCelsius(fahrenheit){
    //Converting Fahrenheit to Celsius
    const celsius = (fahrenheit -32) * 5/9;
    return celsius;
}


function createMessage(fahrenheit,celsius){
    //Going to Determine how it feels based on different tempratures 
    let message =`Th thempratrue ${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C, which feels`;

    if(celsius <0) {
        message +=' oh so very cold.';
    } else if (celsius >=0 && celsius <10) {
        message +='pretty dang cold.;'
    } else if (celsius >=10 && celsius <20){
        message =+'not all that to bad.';
    } else if (celsius >=20 && celsius <30){
        message =+'this is like the begining of summer.';
    } else {
        message +='lets go swimming.';
    }

    return message;

}

function rand(limit) {
    //Generate a random number between 0 and whatever the limit might be
    return Math.floor(Math.random() * (limit +1));
}

//Just some examples
const fahrenheitTempreature = 54
const celsiusTemperature = convertToCelsius(fahrenheitTempreature);
const message = createMessage(fahrenheitTempreature, celsiusTemperature);
const randomNum = rand(10);

console.log(message);
console.log(`Random number between 0 and 10: ${randomNum}`);
