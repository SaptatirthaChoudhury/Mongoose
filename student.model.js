
const mongoose = require("mongoose")

/**
 * Student 
 * 
 * name
 * age
 */

const addressSchema = new mongoose.Schema({
    lane1: String,
    lane2: String,
    street: String,
    city: String,
    country: String,
    pincode: Number
})

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    createdAt: Date,
    updatedAt: Date,
    subject: [String],
    address: addressSchema // Embedded document 
});

module.exports = mongoose.model("Student", studentSchema)
