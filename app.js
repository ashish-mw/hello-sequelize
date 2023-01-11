require("dotenv").config();

const db = require("./models");

async function main() {
  try {
    await db.sequelize.sync();

    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
