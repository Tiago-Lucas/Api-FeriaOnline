const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser"),
app = express();

port = process.env.PORT || 3009;
mongoose.Promise = global.Promise;
mongoose.connect( "mongodb+srv://BancoFeira:123@feira123.iqhyu.mongodb.net/feira123?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro ao se conectar com MongoDB!"));
db.once("open", function(){
    console.log("MongoDB connection OK!")
})


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const userRoute = require('./routes/user/user-route')
userRoute(app);

app.listen(port);
console.log('Server running at port ' + port);
