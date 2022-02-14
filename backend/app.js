const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors());

// Middleware
app.use(express.json({ extended: false }));
app.use(morgan('tiny'));

// routers
const usersRouter = require('./routers/users');
const cardsRouter = require('./routers/cards');
const categoriesRouter = require('./routers/categories');

const api = process.env.API_URL; // api/v1

app.use(`${api}/users`, usersRouter);
app.use(`${api}/cards`, cardsRouter);
app.use(`${api}/categories`, categoriesRouter); // api/v1/categories


mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   /// dbName: 'nmapp-database' 
    dbName: process.env.DB_NAME,
}).then(() => {
    console.log('Database Connection is ready..');
}).catch((err) => {
    console.log(err)
});
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(api);
    console.log(`server is running http://localhost:${PORT}`);
});
