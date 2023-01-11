const { user } = require("../models");

const getAllUsers = () => {
  return user.findAll({
    where: {},
  });
};

module.exports = {
  getAllUsers,
};
