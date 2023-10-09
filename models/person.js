//Define person prototype using schema and model and validate types

const {Schema , model} = require ("mongoose");

const personSchema = new Schema ({
    name: {
        type: String, 
        require: true,
    },
    age:  Number,
    favoriteFoods:[],

})

module.exports = person = model("person", personSchema) 