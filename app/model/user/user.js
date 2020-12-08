const mongoose =require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type: String, 
        required: true, 
        unique: true, 
        index: true, 
        dropDups: true,
    },
      password: { 
          type: String, 
          required: true 
    },
      isAdmin: { 
            type: Boolean, 
            required: true, 
            default: false 
    },
})

module.exports = mongoose.model('User',userSchema);