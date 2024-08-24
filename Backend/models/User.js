/* eslint-disable no-undef */
//  A Mongoose model is a wrapper on the Mongoose schema, it provides an interface to the database for creating, querying, updating, deleting records, etc.
//  A Mongoose schema defines the structure of the document, default values, validators, etc.

const mongoose = require('mongoose');

const { Schema } =mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    location:{type: String ,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    date:{type:Date,default: Date.now},
})

module.exports=mongoose.model('user',UserSchema); 