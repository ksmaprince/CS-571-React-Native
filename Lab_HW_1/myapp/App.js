const express = require('express');
const productRouters = require('./routes/ProductRouters')
const app = express();
const cors = require('cors')

app.use(express.json());

app.use('/products', cors(), productRouters);

app.use((err, req, res, next) => {
    res.status(404).json({ error: req.url + " API not supported!" });
});

app.use((req, res, next) => {
    if (err.message == 'Not Found') {
        res.status(404).json({ error: err.message })
    } else {
        res.status(500).json({ error: "Something went wrong! Try again." })
    }
})

app.listen(5001, () => console.log('App is listening at 5001 ... '))