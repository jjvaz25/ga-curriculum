// **Assignment 2: Random Address Generator**
// - Write a script that can generate random addresses
// - As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
// - Your script should randomly select one item from each of these arrays and then use them to construct a random address
// - Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
// - `node random-address.js`
// - `=> 34578 Dolphin Street, Wonka NY, 44506`

let streetNumber = [123, 321, 23141, 432, 5854];
let streetName = ['Griffin Ave', 'James Place', 'Broadway Blvd', 'Flower St']; 
let cityName = ['Los Angeles', 'Chicago', 'Anaheim', 'Long Beach']; 
let stateName = ['CA', 'MI', 'CT', 'NY']; 
let zipCode = [54940, 90000, 23444, 42424, 53453];

let randomStreetNum = Math.floor(Math.random() * streetNumber.length);
let randomStreetName = Math.floor(Math.random() * streetName.length);
let randomCity = Math.floor(Math.random() * cityName.length);
let randomState = Math.floor(Math.random() * stateName.length);
let randomZip = Math.floor(Math.random() * zipCode.length);

console.log(streetNumber[randomStreetNum], streetName[randomStreetName] + ',', cityName[randomCity], stateName[randomState] + ',', zipCode[randomZip]);