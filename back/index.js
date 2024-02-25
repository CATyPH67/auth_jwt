const express = require('express');
const cors = require("cors");
const app = express();

const corsOptions = {
    origin: "http://localhost:3000"
};

const HOST = '127.0.0.1';
const PORT = 8080;

app.use(cors(corsOptions));
app.use(express.json());

app.get('/main', (req, res) => {
    return res.status(200).json({ 
        title: "my server!",
        text: "hello end"
     });
});

app.listen(PORT, HOST, () =>
    console.log(`Server listens http://${HOST}:${PORT}`)
);