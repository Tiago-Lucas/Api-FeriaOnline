import userRoute from '../app/routes/user/user';
import productRoute from '../app/routes/product/product';
import orderRoute from '../app/routes/order/order';
import uploadRoute from '../app/routes/upload/upload';
import path from 'path';

const bodyParser = require("body-parser")
const express = require('express')
const app = express(),
port =process.env.PORT || 3009

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api/uploads',uploadRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});


const mongoose =require('mongoose')
mongoose.connect('mongodb+srv://BancoFeira:asd@123@feiraonline.rmphf.mongodb.net/FeiraOnline?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology:true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log(`Conectado com o Banco de Dados!`)
}) 

app.listen(port);
console.log('Servidor NodeJS rodando na porta: '+port);