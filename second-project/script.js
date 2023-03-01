let time = document.getElementById('time');
let timezone = document.getElementById('timezone');

let interval = setInterval(updateTime, 1000);

function updateTime() {
    const d = new Date;

    if (d.getHours() > 12) {
        time.textContent = `${ d.getHours() - 12 }:${ d.getMinutes() }:${ d.getSeconds() }`;
        timezone.textContent = 'PM';
    } else {
        time.textContent = `${ d.getHours() }:${ d.getMinutes() }:${ d.getSeconds() }`;
        timezone.textContent = 'AM';
    }
}