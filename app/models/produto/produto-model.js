const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const produtoSchema = new Schema({
    nomeProduto:{
        type:String,
        trim:true
    },
    Descricao:{
        type:String,
        trim:true
    },
    preco:{
        type:Number,
        trim:true
    },
    local:{
        cidade:{
            type:String,
            trim:true
        },
        estado:{
            type:String,
            trim:true
        }
    },
    contato:{
        type:String,
        trim:true
    }
})
module.exports = mongoose.model('Produto',produtoSchema);