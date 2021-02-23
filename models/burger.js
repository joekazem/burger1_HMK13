const orm = require('../config/orm.js');


// create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {

  selectAll: (callback) => {
    orm.selectAll(function(res){
      callback(res);
    });
  },

  insertOne: (burger_name, callback) => {
    orm.insertOne(burger_name, function(res){
      callback(res);
    });
  },

  updateOne: (burger_id, callback) => {
    orm.updateOne(burger_id, function(res){
      callback(res);
    });
  }

};


// Export at the end of the burger.js file.
module.exports = burger;