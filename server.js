const express = require('express');
const app = express()
const port = 3000;
const bodyParser = require('body-parser');
let options = {
    maxAge: '2y',
    etag: false
};

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public', options));

app.get('/', (req, res) => {
    res.render('homepage')
})
app.get('/form', (req, res) => {
    res.render('form')
})

app.post('/responses', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Bad Request: No form data found');
    }
    const formData = req.body;
    console.log(req.body)
    res.render('thank-you', {
        formData: formData
    })
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
})