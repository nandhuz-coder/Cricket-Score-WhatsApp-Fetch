const axios = require("axios");
function getscore(id) {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(`http://127.0.0.1:5000/score?id=${id}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      console.error(error);
    }
  });
}
module.exports = getscore;
