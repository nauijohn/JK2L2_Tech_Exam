const names = [];

module.exports = class Name {
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  save() {
    names.push(this);
  }

  static fetchAll() {
    return names;
  }

  static getMaxId() {
    if (names.length === 0) return 0;
    const ids = names.map(name => name.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }

  static getNameById(id) {
    return names.find(name => name.id.toString() === id);
  }

  static editNameById(id, firstName, lastName) {
    const index = names.findIndex(name => name.id.toString() === id);
    if (index === -1) return false;
    names[index].firstName = firstName;
    names[index].lastName = lastName;
    return true;
  }

  static deleteNameById(id) {
    const index = names.findIndex(name => name.id.toString() === id);
    if (index === -1) return false;
    names.splice(index, 1);
    return true;
  }
};
