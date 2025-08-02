let input = document.querySelector('input')

input.addEventListener('input', () => {
    console.log('hello');
    console.log(input.value);

    getData()
    
    
})

console.log(input.classList);


fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=6.4474&lon=3.3903&appid=fd95d8aa0480e31225fd987e45029e76"
)
    .then((x) => {
        return x.json();
    })
    .then((y) => console.log(y));















// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//         console.log("hello");
//     } else {
//         console.log("error");
//     }
// }

// function showPosition(position) {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     console.log(lat, lon);
//     console.log(position);
    
// }

// function showError(error) {
//     switch (error.code) {
//         case error.PERMISSION_DENIED:
//             alert("User denied the request for Geolocation.");
//             break;
//         case error.POSITION_UNAVAILABLE:
//             alert("Location information is unavailable.");
//             break;
//         case error.TIMEOUT:
//             alert("The request to get user location timed out.");
//             break;
//         case error.UNKNOWN_ERROR:
//             alert("An unknown error occurred.");
//             break;
//     }
// }

// getLocation();
