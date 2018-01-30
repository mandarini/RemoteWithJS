var example = example || {};

const oscPort = new osc.WebSocketPort({
    url: "ws://localhost:8081"
});


function SocketArt() {
    console.log('this is first');
    listen();
    oscPort.open();
};

function listen() {
    console.log('this is listen');
    oscPort.on("open", function (e) {
        console.log('open', e);
    });
    oscPort.on("message", function (oscMsg) {
        console.log("An OSC message just arrived!", oscMsg);
        document.getElementById("message").innerText=oscMsg.args;
    });
    oscPort.on("close", function (e) {
        console.log('closed', e)
    });
};
