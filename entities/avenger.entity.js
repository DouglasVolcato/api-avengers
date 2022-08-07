class Avenger {
  constructor(obj) {
    this.id = generateId();
    this.character = obj.character;
    this.realName = obj.realName;
    this.joinedIn = obj.joinedIn;
    this.image = obj.image;
    this.notes = obj.notes;
  }
  showAvenger() {
    return {
      id: this.id,
      character: this.character,
      realName: this.realName,
      joinedIn: this.joinedIn,
      image: this.image,
      notes: this.notes,
    };
  }
  verify() {
    if (!this.character) {
      return 'Character cannot be empty.';
    }
    if (!this.realName) {
      return 'realName cannot be empty.';
    }
    if (!this.joinedIn) {
      return 'joinedIn cannot be empty.';
    }
    if (!this.image) {
      return 'image cannot be empty.';
    }
    if (!this.notes) {
      return 'notes cannot be empty.';
    }
  }
}

function generateId(x = 1) {
  let num = x;
  const av = require('../mocks/avengers');

  for (let n of av) {
    if (n.id == x) {
      return generateId((num += 1));
    }
  }
  return num;
}

module.exports = Avenger;
