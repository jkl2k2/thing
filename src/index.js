require('dotenv').config();

const { SapphireClient } = require('@sapphire/framework');

const client = new SapphireClient({ intents: ['Guilds'] });

client.login(process.env.TOKEN);

client.on('ready', () => {
    console.log("Ready");
});