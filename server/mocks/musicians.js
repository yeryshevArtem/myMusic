module.exports = function(app) {
  var express = require('express');
  var musiciansRouter = express.Router();

  var musicians = [
    {id: 1, name: "Ethan", surname: "Reilly", track_ids: [1, 2, 3]},
    {id: 2, name: "John", surname: "Lenon", track_ids: [4, 5, 6]},
    {id: 3, name: "Vlad", surname: "Pidor", track_ids: [7, 8, 9]}
  ];

  var getMusician = function (identifier) {
    var neededMusician;

    musicians.forEach(function (musician) {
      if (musician.id == identifier) {
        neededMusician = musician;
      }
    });

    return neededMusician;
  };

  musiciansRouter.get('/', function(req, res) {
    if ("undefined" === typeof req.query.id) {
      res.send({
        'musicians': musicians
      });
    } else {
      res.send({
        'musician': getMusician(req.query.id)
      });
    }
  });

  musiciansRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  musiciansRouter.put('/:id', function(req, res) {
    res.send({
      'musicians': {
        id: req.params.id
      }
    });
  });

  musiciansRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/musicians', musiciansRouter);
};
