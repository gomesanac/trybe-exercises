const data = require("./lookup_data");

const lookup = (login, property) => {
  const findUser = data.find(({ login: user }) => user === login);
  if (findUser && !(findUser[property] === undefined)) {
    return findUser[property];
  } else if (!findUser) {
    throw new Error("Could not find user");
  }
  throw new Error("Could not find property");
};

console.log(lookup("norvig", "likes"));

module.exports = lookup;
