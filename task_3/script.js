const text_field = document.querySelector('#text_field');
const mapLink = document.querySelector('#map-link');
const btn = document.querySelector('.j-btn-test');
let sizes_field = document.querySelector('#sizes_field');

// Функция, выводящая текст об ошибке
const error = () => {
    text_field.textContent = 'Невозможно получить ваше местоположение';
}

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
    console.log('position', position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    text_field.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = 'Ссылка на карту';
}
btn.addEventListener('click', () => {
    let height = document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;
    sizes_field.textContent = (`Высота окна:${height} пикселей, Ширина окна:${width} пикселей`)

    mapLink.href = '';
    mapLink.textContent = '';

    if (!navigator.geolocation) {
        text_field.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
        text_field.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
});

