// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the Burgers
    app.get("/", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.Burger.findAll({}).then(function(dbBurger) {
            // We have access to the Burgers as an argument inside of the callback function
            // console.log("find All:");
            // console.log(dbBurger.length);
            // for (var i = 0; i < dbBurger.length; i++) {
            // console.log(dbBurger[i].dataValues);
            // }
            var burgers = {
                burgers: dbBurger
            };
            res.render("index", burgers);
        });
    });

    // POST route for saving a new Burger
    app.post("/", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function(dbBurger) {
            // We have access to the new Burger as an argument inside of the callback function
            // console.log("consoke:");

            // console.log(dbBurger);
            res.redirect("/");
        });
    });

    // DELETE route for deleting Burgers. We can get the id of the Burger to be deleted from
    // req.params.id
    // app.delete("/api/burgers/:id", function(req, res) {
    //   // We just have to specify which Burger we want to destroy with "where"
    //   db.Burger.destroy({
    //     where: {
    //       id: req.params.id
    //     }
    //   }).then(function(dbBurger) {
    //     res.json(dbBurger);
    //   });

    // });

    // PUT route for updating Burgers. We can get the updated Burger data from req.body
    app.put("/:id", function(req, res) {

        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        console.log(req.body.burger_name);
        db.Burger.update({
            devoured: req.body.devoured,
            customer_name: req.body.customer_name
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
            res.redirect("/");
        });
    });
};
