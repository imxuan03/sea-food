const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const session = require('express-session');
const moment = require("moment");
const cookieParser = require('cookie-parser');
const path = require("path");
const cors = require('cors');

require("dotenv").config();

const database = require('./config/database');
database.connect();

const adminRoute = require("./routes/admin/index.route");
const systemPrefix = require("./config/system")

const app = express();
const port = process.env.PORT;

// cookies
app.use(cookieParser('KWJFKWEIFHW'));
app.use(session({ cookie: { maxAge: 60000 }}));

app.use(express.static('public'))

// override
app.use(methodOverride('_method'));
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

// Variables
app.locals.adminPrefix = systemPrefix.adminPrefix;
app.locals.moment = moment;

// Routes
adminRoute(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})
