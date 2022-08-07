const Services = require('../services/avengers.service');
const services = new Services();

class Controllers {
  getAllController = (req, res) => {
    res.send(services.getAllService());
  };

  getByIdController = (req, res) => {
    res.send(services.getByIdService(req.params.id));
  };

  deleteController = (req, res) => {
    res.send(services.deleteService(req.params.id));
  };

  postController = (req, res) => {
    res.send(
      services.postService({
        character: req.body.character,
        realName: req.body.realName,
        joinedIn: req.body.joinedIn,
        image: req.body.image,
        notes: req.body.notes,
      }),
    );
  };
  putController = (req, res) => {
    console.log(req.body.notes);
    res.send(
      services.putService(
        {
          character: req.body.character,
          realName: req.body.realName,
          joinedIn: req.body.joinedIn,
          image: req.body.image,
          notes: req.body.notes,
        },
        req.params.idSearch,
      ),
    );
  };
}

module.exports = Controllers;
