const wi = require("@arcsine/win-info");
const fp = require("find-process");

const { Client } = require("discord-rpc");
const client = new Client({ transport: "ipc" });

const start = new Date();

async function UpdatePresence() {
    const apps = await fp("name", "Aseprite");
    let app;
    for (let i = 0; i < apps.length; i++) {
        if (["Aseprite.exe"].includes(apps[i].name)) {
            app = apps[i];
        }
    }

    var presence = {
        largeImageKey: 'img',
        smallImageKey: 'none',
        largeImageText: ".aseprite",
        smallImageText: "Aseprite"
    }

    let window;
    if (app) {
        try { 
            window = wi.getByPidSync(app.pid);
        }
        catch {
            console.log('Aseprite is not open.');
        }
    }

    if (window) {
        if (window.title.includes(" - ")) {
            window.filename = window.title.split(" - ")[0];
            presence.smallImageKey = 'aseprite';

            if (window.filename.endsWith('.ase')) {
                presence.largeImageKey = 'ase';
                presence.largeImageText = '.ase';
            } else if (window.filename.endsWith('.aseprite')) {
                presence.largeImageKey = 'ase';
                presence.largeImageText = '.aseprite';
            } else if (window.filename.endsWith('.jpg')) {
                presence.largeImageKey = 'jpg';
                presence.largeImageText = '.jpg';
            } else if (window.filename.endsWith('.jpeg')) {
                presence.largeImageKey = 'jpg';
                presence.largeImageText = '.jpeg';
            } else if (window.filename.endsWith('.png')) {
                presence.largeImageKey = 'png';
                presence.largeImageText = '.png';
            } else if (window.filename.endsWith('.gif')) {
                presence.largeImageKey = 'gif';
                presence.largeImageText = '.gif';
            } else {
                presence.largeImageKey = 'img';
                presence.largeImageText = 'Image';
            }
        } else {
            presence.largeImageKey = 'aseprite';
            presence.largeImageText = 'Aseprite';
        }

        client.setActivity({
            state: window && window.filename ? `Editing: ${window.filename}` : "Idling",
            startTimestamp: start,
            largeImageKey: presence.largeImageKey,
            smallImageKey: presence.smallImageKey,
            largeImageText: presence.largeImageText,
            smallImageText: presence.smallImageText
        }, app.pid || null);
    }
}

UpdatePresence();

client.on("ready", () => {
    console.log("Connected to Discord.");
    UpdatePresence();
    setInterval(() => {
        UpdatePresence();
    }, 15000);
});

console.log("Connecting...");
client.login({ clientId: "732308035661201542" });

process.on("unhandledRejection", console.error);