var example = example || {};

(function () {
    "use strict";
    console.log('hello');
    example.SocketArt = function () {
        console.log('this is first');
        this.oscPort = new osc.WebSocketPort({
            url: "ws://localhost:8081"
        });

        this.listen();
        this.oscPort.open();

        this.oscPort.socket.onmessage = function (e) {
            $("#message").text(e);
            console.log('this is other');

        };
    };

    example.SocketArt.prototype.listen = function () {
        console.log('this is listen');
        this.oscPort.on("open", function(e) {
            console.log('open', e);
            e.onmessage(function(msg) {
                console.log('message', msg);
            })
        });
        this.oscPort.on("message", this.mapMessage.bind(this));
        this.oscPort.on("message", function (msg) {
            console.log('this is message');
            console.log("message", msg);
        });
        this.oscPort.on("close", function (e) {
            console.log('closed', e)
        });
    };

    example.SocketArt.prototype.mapMessage = function (oscMessage) {
        $("#message").text(oscMessage);
        console.log('this is message');

        // var address = oscMessage.address;
        // var value = oscMessage.args[0];
    };

}());
