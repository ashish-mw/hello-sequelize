const { user, movie } = require("../models");

const createMovie = (moviePayload) => {
  /*
  "name": "The Matrix",
  "genre": "Sci-fi",
  "language": "English",
  "yearOfRelease": "1999",
  "createdByUser": "8312321938232"
  */
  return movie.create(moviePayload);
};

const getMovieInfo = ({ movieId }) => {
  return movie.findOne({
    where: {
      id: movieId,
    },
    // attributes: ["name", "genre"],
    include: [
      {
        model: user,
        as: "createdUserInfo",
        // attributes: ["username"],
      },
    ],
  });
};

const updateMovie = ({ movieId, updatePayload }) => {
  return movie.update(
    {
      ...updatePayload,
    },
    {
      where: {
        id: movieId,
      },
      // returning: "new",
    }
  );
};

const deleteMovie = ({ movieId }) => {
  return movie.destroy({
    where: {
      id: movieId,
    },
  });
};

module.exports = {
  createMovie,
  getMovieInfo,
  updateMovie,
  deleteMovie,
};
