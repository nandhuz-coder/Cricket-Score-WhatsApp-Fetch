const wa = require("@open-wa/wa-automate");

async function createWhatsAppClient() {
    const client = await wa.create({
        sessionId: "bot1",
        multiDevice: true,
        authTimeout: 60,
        blockCrashLogs: true,
        disableSpins: true,
        headless: true,
        hostNotificationLang: "PT_BR",
        logConsole: false,
        popup: true,
        qrTimeout: 0,
    });
    return client;
}

module.exports = createWhatsAppClient;
