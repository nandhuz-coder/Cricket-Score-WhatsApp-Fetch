const getscore = require("../score/Fetch-score");

function score(id) {
  getscore(id)
    .then(async (res) => {
      let body = `*${res.title}*
    \n${res.batterone}- ${res.batsmanonerun}${res.batsmanoneball} - sr${res.batsmanonesr}
    \n${res.battertwo}- ${res.batsmantworun}${res.batsmantwoball} - sr${res.batsmantwosr}
    \n${res.livescore}
    \n${res.bowlerone}- ${res.bowleroneover} overs. ${res.bowleronerun} runs. ${res.bowleronewickers} wickets. ${res.bowleroneeconomy} eco.
    \n${res.bowlertwo}- ${res.bowlertwoover} overs. ${res.bowlertworun} runs. ${res.bowlertwowickers} wickets. ${res.bowlertwoeconomy} eco.
    \n${res.update}.
    `;
      await client.sendText(message.from, body);
    })
    .catch(async (err) => {
      await client.sendText(message.from, "Unable to fetch score");
    });
}

module.exports = score;
