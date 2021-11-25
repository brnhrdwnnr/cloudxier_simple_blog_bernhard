if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const cors = require('cors')
const express = require("express");
const app = express();
const routes = require('./routes/index')
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routes)

app.listen(PORT, () => {
	console.log(`This app listening at http://localhost:${PORT}`);
});