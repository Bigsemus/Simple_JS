let socket = new WebSocket('ws://localhost:8080');

document.forms.publish.onsubmit = function () {
    let dat = new Date()
    let hour = dat.getHours()
    let minute = dat.getMinutes()
    let outgoingMessage = this.message.value;
    let nameUser = this.name.value;

    let sms = `<p class='nameUser-p'>${nameUser}</p>
<div class='messageBlock'>${outgoingMessage}</div>
<p class='time-p'>${hour}:${minute}</p>`

    document.getElementById('myMessages')
        .insertAdjacentHTML('beforeend', sms)

    socket.send(sms);
    return false;
};

socket.onmessage = function (event) {
    let incomingMessage = event.data;
    showMessage(incomingMessage);
};

function showMessage(message) {
    document.getElementById('messages')
        .insertAdjacentHTML('beforeend', message)
}