/**
 * We will use this file to connect to DB and execute queries
 */

const mongoose = require("mongoose")

//console.log(mongoose);

/**
 * Try making a connection to the mongoDB
 */
async function connectMongoDB() {

    try {
        const connectDB = await mongoose.connect('mongodb://127.0.0.1:27017/mongooseDemo', { useNewUrlParser: true })
        console.log("Connected to MongoDB database ! ", connectDB);
    } catch (err) {
        console.log("Failed to connect MongoDB database ! ", err);
    }

}

connectMongoDB();


const Student = require("./student.model")
/**
 * Database operation
 */


async function dbOperation() {

    try {
        // await Student.collection.drop(); // Delete existing collection //
        //     const student = await Student.create({
        //         name: "Sapta",
        //         age: 24,
        //         email: "sapta@gmail.com",
        //         subjects: [""],
        //         address: {
        //             lane1: "l1",
        //             lane2: "l2",
        //             street: "Bellandur",
        //             city: "Bangalore",
        //             country: "India",
        //             pincode: 560103
        //         }
        //     });
        //    console.log(student);
        // const student1 = await Student.create({
        //     name: "Mohor",
        //     age: 24,
        //     email: "mohor@gmail.com",
        //     subjects: [""],
        //     address: {
        //         lane1: "l4",
        //         lane2: "l12",
        //         street: "BiryaniRoad",
        //         city: "Hyderabad",
        //         country: "India",
        //         pincode: 673456
        //     }
        // });
        // console.log(student + "  " + student1);

        /**
         * Using mongoose I want to search a record/document based on id
         */
        // const stu = await Student.findById("6412eeebee1b0ff12dbd0cb4")
        // console.log(stu);

        // const name = await Student.find({ name: "Bubai" })
        // console.log(name);

        //__________________________________________________________________
        /**
         * Now I want to delete the document
         */
        // const stud = await Student.deleteOne({ name: "Babai" });
        // console.log(stud)

        //__________________________________________________________
        /**
         * Using the where clause
         */
        const studs = await Student.where("age").gt("10")
      //  console.log(studs);


    } catch (err) {
        console.log(err);
    }

}

/**
 * Execute the function
 */
dbOperation();