let socket = new WebSocket("wss://ws.ifelse.io");
let messageSend = document.getElementById('messagesSend');
let messagesReceived = document.getElementById('messagesReceived');
let geoBtn = document.getElementById('geo');
let geoPos = document.getElementById('geoPos');
// отправка сообщения из формы
document.forms.publish.onsubmit = function () {
    let outgoingMessage =  this.message.value;
    let p = document.createElement('p');
    p.innerHTML = 'Вы: '+ outgoingMessage;
    messageSend.appendChild(p);
    socket.send(outgoingMessage);
    return false;
};

// получение сообщения - отобразить данные в div#messages
socket.onmessage = function (event) {
    let message = `Сервер: ${event.data}`;
    if (event.data == geoPos) {} else {
        let p = document.createElement('p');
        p.innerHTML = message;
        messagesReceived.appendChild(p);
    }
}

const success = (position) => {
    console.log('position', position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    let geoMessage = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    geoPos.href = geoMessage;
    geoPos.textContent = 'Ссылка на местоположение';
    socket.send(geoMessage);
    return false;
}

const error = () => {
    text_field.textContent = 'Невозможно получить ваше местоположение';
}


geoBtn.addEventListener('click', () => {

    if (!navigator.geolocation) {
        console.log('Geolocation не поддерживается вашим браузером');
    } else {
        console.log('Определение местоположения…');
        navigator.geolocation.getCurrentPosition(success, error);

    }
});