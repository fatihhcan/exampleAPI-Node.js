const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 4041;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [{ name: 'Fatih', email: 'fatih@mail.com' }]

app.get('/', (_, res) => {
    res.send('Your Express App');
});

app.get('/users', (_, res) => {
    res.json({ ok: true, users });
});

app.get('/user/:name', (req, res) => {
    const { name } = req.params;
    const user = users.filter((user) => user.name === name)[0];
    res.json({ ok: true, user });
});

app.post('/adduser', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({ name, email });
        res.json({ ok: true, users });

    }
});

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});