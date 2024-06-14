const createWhatsAppClient = require("../config/index");
const score = require("./commands/get-score");
let client;
async function startBot() {
  client = await createWhatsAppClient();
  onmsg = async (message) => {
    if (message.body.startsWith("!")) {
      const command = message.body.split(" ")[0].slice(1);
      if (command == "score") {
        return score("111111");
      } else {
        return await client.sendText(message.from, "No commands found.");
      }
    }
  };
  client.onMessage(onmsg);
}

startBot();
