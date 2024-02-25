const express = require('express');
const app = express();

const HOST = '127.0.0.1';
const PORT = 8080;

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