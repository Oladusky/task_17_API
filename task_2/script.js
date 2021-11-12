const changeBtn = document.getElementById('changeBtn');
let icon1 = document.getElementById('icon1');
let icon2 = document.getElementById('icon2');

let arr = [icon1, icon2]

changeBtn.addEventListener('click', () => {
    arr[0].hidden = true;
    arr[1].hidden = false;
    arr.push(arr[0]);
    arr.shift();


})