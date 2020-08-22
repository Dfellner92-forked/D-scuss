const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log("findAll", req.params)
    db.blogUsers
      .find({ email: req.params.email})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
  },
  findAndLogEmail: function(req, res) {
    console.log("find something", req.params)
  },
  create: function(req, res) {
    console.log("from the controllor: ", req.body);
    db.blogUsers
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
