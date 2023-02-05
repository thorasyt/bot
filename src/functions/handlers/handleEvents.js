const fs = require("fs");

module.exports = (Client) => {
    client.handleEvents = async () => {
        const eventFolders = fs.readdirSync('./src/events');
        for (const folder of eventFolders) {
            const eventFiles = fs 
              .readdirSync('./src/event/${folder}')
              .filter((files) => file.endswith(".js"));
            switch (folder) {
                case "client":
                    for (const file of eventFiles) {
                        const event = require('../../events/${folder}');
                        if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
                        else client.on(event.name, (...args) => event.execute(...args, client));
                    }
                    break;

                default:
                    break;    
            }  
        }
    }
}