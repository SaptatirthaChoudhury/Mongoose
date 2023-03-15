/**
 * We will use this file to connect to DB and execute queries
 */

const mongoose = require("mongoose")

//console.log(mongoose);

/**
 * Try making a connection to the mongoDB
 */

mongoose.connect('mongodb://127.0.0.1:27017/mongooseDemo', { useNewUrlParser: true }).then((result) => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});


const Student = require("./student.model")
/**
 * Database operation
 */


async function dbOperation() {

    try {
        const student = await Student.create({
            name: "Mohor",
            age: 24,
            email: "saptatirtha@gmail.com",
            address: {
                lane1: "l1",
                lane2: "l2",
                street: "Bellandur",
                city: "Bangalore",
                country: "India",
                pincode: 560103
            }
        });
        console.log(student);
    } catch (err) {
        console.log(err);
    }

}

/**
 * Execute the function
 */
dbOperation();