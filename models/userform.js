const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserFormSchema = new Schema({
    firstName: String,
    email: String
});

const UserForm = mongoose.model("UserForm", UserFormSchema);
module.exports= UserForm;