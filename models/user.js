const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    username:String,
    password:String,
    email:String,
    isadmin: {
        type: Boolean,
        default: false
    }
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",UserSchema);