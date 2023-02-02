const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: Number,
    lastName: String,
    email: {type : String, index : true, required : true},
    password : {type : String, required : true},
    cookie : {type : String}
});


// const byUsername = (username) => {
//     return this.findOne({email : username})
// };

const userModel = mongoose.model('User', userSchema);




module.exports = {
    userModel : userModel
};
