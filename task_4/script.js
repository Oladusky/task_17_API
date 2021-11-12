
const output = document.querySelector('#output');
const btn = document.querySelector('.j-btn-test');

function sendRequest() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`)
                .then(response => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                    output.innerHTML = `Временная зона: +${data.timezone_offset}, ${data.timezone}. Местные дата и время: ${data.date_time_txt}`
                    return data
                })
        })
    }
}

btn.addEventListener('click', sendRequest);