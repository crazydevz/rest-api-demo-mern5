const express = require('express');
const cors = require('cors');

require('dotenv').config();
require('./database/connect')();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/v1/products', require('./routes/product'));
app.use('/api/v1/users', require('./routes/user'));

app.get('/', (req, res, next) => {
	res.send('Hello from server');
});

app.all('*', (req, res) => {
	res.status(404).send(`No route found against ${req.originalUrl}`);
});

app.listen(PORT, () => {
	console.log(`Server listening at port ${PORT}`);
});
