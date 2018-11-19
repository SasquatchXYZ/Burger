// Import the ORM in order to be able to create functions that will then, in turn interact with the database.
const orm = require('../config/orm');

const burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },

    insertOne: function (burger_name, cb) {
        console.log(burger_name);
        orm.insertOne(burger_name, function (res) {
            cb(res);
        });
    },

    updateOne: function (id, cb) {
        console.log(id);
        orm.updateOne(id, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;