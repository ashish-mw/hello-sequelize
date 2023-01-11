require("dotenv").config();

const {
  createMovie,
  getMovieInfo,
  updateMovie,
  deleteMovie,
} = require("./controllers/movie.controller");

function printDBValues(value) {
  const json = JSON.parse(JSON.stringify(value));
  console.log(json);
}

async function main() {
  try {
    // R ead users
    // const users = await getAllUsers();
    // printDBValues(users);

    const movieInfo = await getMovieInfo({
      movieId: "9c9249bc-3cd1-4fc8-8b98-06697ed44983",
    });
    printDBValues(movieInfo);

    // C reate movie
    // const m = {
    //   name: "The Animatrix 2",
    //   genre: "Sci-fi",
    //   language: "English",
    //   yearOfRelease: "1980",
    //   createdByUser: "82bbfc0f-4ff1-4488-bed3-624e53e1053d",
    // };
    // const savedMovie = await createMovie(m);
    // printDBValues(savedMovie);

    // U pdate a movie
    // const update = {
    //   yearOfRelease: 2004,
    //   language: "English, French",
    // };
    // const movieId = "d9f3ecb7-6b3f-4c08-854a-85be54c936d6";
    // const updatedInfo = await updateMovie({
    //   movieId,
    //   updatePayload: update,
    // });
    // printDBValues(updatedInfo);

    // D elete a movie
    // const movieId = "d9f3ecb7-6b3f-4c08-854a-85be54c936d6";
    // const deleted = await deleteMovie({
    //   movieId,
    // });
    // printDBValues(deleted);

    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
