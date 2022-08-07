const avengers = require('../mocks/avengers');
const Avenger = require('../entities/avenger.entity');

class Services {
  getAllService() {
    return avengers;
  }

  getByIdService(id) {
    const obj = avengers.filter((obj) => obj.id.toString() == id.toString())[0];
    if (obj) {
      return obj;
    }
    return `Id ${id} not found to get.`;
  }

  deleteService(id) {
    const obj = avengers.filter((obj) => obj.id.toString() == id.toString())[0];
    if (obj) {
      avengers.splice(avengers.indexOf(obj), 1);
      return `Id ${id} deleted.`;
    }
    return `Id ${id} not found to delete.`;
  }

  postService(obj) {
    const newAvenger = new Avenger(obj);
    try {
      if (newAvenger.verify().includes('empty')) {
        return newAvenger.verify();
      }
    } catch (e) {
      const avengerToSplice = { ...newAvenger.showAvenger() };
      avengers.push(avengerToSplice);
      return `New Avenger added.`;
    }
  }

  putService(obj, id) {
    const object = avengers.filter((i) => i.id.toString() == id.toString())[0];
    if (object) {
      let objectUpdated = object;

      objectUpdated.character =
        obj.character === undefined ? objectUpdated.character : obj.character;
      objectUpdated.realName =
        obj.realName === undefined ? objectUpdated.realName : obj.realName;
      objectUpdated.joinedIn =
        obj.joinedIn === undefined ? objectUpdated.joinedIn : obj.joinedIn;
      objectUpdated.image =
        obj.image === undefined ? objectUpdated.image : obj.image;
      objectUpdated.notes =
        obj.notes === undefined ? objectUpdated.notes : obj.notes;

      avengers.splice(avengers.indexOf(object), 1, objectUpdated);
      return `Id ${id} updated.`;
    }
    return `Id ${id} not found to update.`;
  }
}

module.exports = Services;
