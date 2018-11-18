// Import MySQL Connection
const connection = require('./connection');

const orm = {
    selectAll: function (cb) {
        const query = 'SELECT * FROM burgers';
        connection.query(query, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    },

    insertOne: function (name, cb) {
        const query = `INSERT INTO burgers (burger_name) VALUES (?)`;
        connection.query(query, [name], function(err, result) {
            if (err) throw err;
            cb(result)
        });
    },
    updateOne: function (id, cb) {
        const query = `UPDATE burgers SET devoured = ? WHERE id = ?`;
        connection.query(query, [id], function(err, result) {
            if (err) throw err;
            cb(result)
        });
    }
};

// Export the orm object for the model (burger.js)
module.exports = orm;