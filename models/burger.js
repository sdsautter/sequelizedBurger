module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't
            // have a text value
            allowNull: false,
            // len is a validation that checks that our todo is between 1 and 140 characters
            validate: {
                len: [1, 140]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            // defaultValue is a flag that defaults a new todos complete value to false if
            // it isn't supplied one
            defaultValue: false
        },
        customer_name: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't
            // have a text value
            allowNull: true,
            // len is a validation that checks that our todo is between 1 and 140 characters
            validate: {
                len: [1, 140]
            }
        }
    });
    return Burger;
};


// // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var burger = {
//   all: function(cb) {
//     orm.selectAll(function(res) {
//       return cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   insert: function(vals, cb) {
//     orm.insertOne(vals, function(res) {
//       return cb(res);
//     });
//   },
//   update: function(devoured, id, cb) {
//     orm.updateOne(devoured, id, function(res) {
//       return cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = burger;
