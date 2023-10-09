const express = require('express')

require('dotenv').config();

const connectDB = require ("./config/database.js")
const person = require ("./models/person.js")
const app = express()
const port = 3000

connectDB();

// Create Many Records with model.create():

// person.create([
//     {name:"zied" , age: 10, favoriteFoods: ["pizza", "sandwich", "burger" ]},
//     {name:"hamma" , age: 25, favoriteFoods: ["chiken", "sandwich", "frites" ]},
//     {name:"slouma" , age: 31, favoriteFoods: ["pizza", "beef", "frites" ]},
//     {name:"dali" , age: 33, favoriteFoods: ["beef", "rice", "salad" ]},
//     {name:"jhon" , age: 18, favoriteFoods: ["fish", "pasta", "frites" ]}
// ])

// Use model.find() to Search Your Database:

// person.find().then((person)=>{console.log(person)}).catch((error)=>{console.log(error)})


// Use model.findOne() to Return a Single Matching Document from Your Database:

// person.findOne({favoriteFoods:{$in: ["pizza"]}}).then((person)=>{console.log(person)}).catch((error)=>{console.log(error)})


// Use model.findById() to Search Your Database By _id:

// person.findById({_id:"6521783f28b934fbcaac2461"}).then((person)=>{console.log(person)}).catch((error)=>{console.log(error)})


// Perform Classic Updates by Running Find, Edit, then Save

// const food= async()=> {
//     const addto = await
//      person.findById({_id:"6521783f28b934fbcaac2460"})
//      console.log(addto)
//     if (addto) {
//         addto.favoriteFoods.push("hamburger")
//         const res = await addto.save()
//         console.log(res)
//     } 
// }
// food();

// Perform New Updates on a Document Using model.findOneAndUpdate()

// person.findOneAndUpdate({name:"hamma"}, {$set:{age:20}}, {new:true})
//     .then((Person)=>{console.log(Person)})
//     .catch((error)=>{console.log(error)});


// Delete One Document Using model.findByIdAndRemove

// person.findOneAndRemove({_id:"6521783f28b934fbcaac2461"})
//         .then(Person=>console.log(Person))
//         .catch(error=>console.log(error));

// MongoDB and Mongoose - Delete Many Documents with model.remove()
// model.remove is deprecated so we use model.delete or model.deleteMany

// person.deleteMany({name:"hamma"}).then((person)=>{console.log(person)}).catch((error)=>{console.log(error);})

// Chain Search Query Helpers to Narrow Search Results

// person.find({favoriteFoods:"pizza"})
//     .sort({name:1})
//     .limit(2)
//     .select({age:0})
//     .exec()
//     .then((error , data)=>{
//         if (error){
//             console.log(error);
//         }else{
//             console.log
//         }
//     })



app.listen(port, (err) => {
    err? console.log("error") : console.log(`server run on port ${port}!`)
})