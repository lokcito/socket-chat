const io = require("socket.io")({
    cors: {
        origin: "*"
    }
});

io.on("connection", client => {
    client.on("ask", async (data) => {
        client.emit("response", {
            "msg": "ey! gracias por escribir al chat de equisd!!"
        });
    });
});

io.listen(8000);