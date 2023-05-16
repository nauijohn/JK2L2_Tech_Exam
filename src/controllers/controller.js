const Name = require('../models/Name');

exports.getAll = (req, res) => {
  const names = Name.fetchAll();
  return res.send(names);
};

exports.getName = (req, res) => {
  const name = Name.getNameById(req.params.id);
  if (!name) res.status(404).send();
  return res.send(name);
};

exports.addName = (req, res) => {
  const id = Name.getMaxId();
  const name = new Name(id, req.body.firstName, req.body.lastName);
  name.save();
  return res.send('Successfully added name');
};

exports.editName = (req, res) => {
  const id = req.params.id;
  const name = Name.getNameById(id);
  if (!name) return res.status(404).send();
  const result = Name.editNameById(id, req.body.firstName, req.body.lastName);
  if (!result) return res.status(404).send();
  return res.send('Successfully edited name');
};

exports.deleteName = (req, res) => {
  const id = req.params.id;
  const name = Name.getNameById(id);
  if (!name) return res.status(404).send();
  const result = Name.deleteNameById(id);
  if (!result) return res.status(404).send();
  return res.send('Successfully deleted name');
};
