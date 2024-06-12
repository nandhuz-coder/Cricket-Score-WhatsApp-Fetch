const createWhatsAppClient = require("../config/index");
const getscore = require("./score/Fetch-score");
let client;
async function startBot() {
  client = await createWhatsAppClient();
  onmsg = async (message) => {
    if (message.body.startsWith("!")) {
      const command = message.body.split(" ")[0].slice(1);
      if (command == "score") {
        getscore(87626).then(async (res) => {
          let body = `*${res.title}*
          \n${res.batterone}- ${res.batsmanonerun}${res.batsmanoneball} - sr${res.batsmanonesr}
          \n${res.battertwo}- ${res.batsmantworun}${res.batsmantwoball} - sr${res.batsmantwosr}
          \n${res.livescore}
          \n${res.bowlerone}- ${res.bowleroneover} overs. ${res.bowleronerun} runs. ${res.bowleronewickers} wickets. ${res.bowleroneeconomy} eco.
          \n${res.bowlertwo}- ${res.bowlertwoover} overs. ${res.bowlertworun} runs. ${res.bowlertwowickers} wickets. ${res.bowlertwoeconomy} eco.
          \n${res.update}.
          `;
          await client.sendText(message.from, body);
        });
      }
    }
  };
  client.onMessage(onmsg);
}

startBot();
