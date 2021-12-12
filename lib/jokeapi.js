const fetch = require('cross-fetch');

module.exports = {
    get: async (lang, response) => {
        if(!lang) {
            return console.log('Please specify a language \n\n-cs (Czech) \n-de (German) \n-en (English) \n-es (Spanish) \n-fr (French) \n-pt (Portuguese)');
        }

        fetch(`https://v2.jokeapi.dev/joke/Any?lang=${lang}`).then(response => response.json()).then(data => {
            let category = data.category;
            let type = data.type;
            let name = data.setup;
            let description = data.delivery;
            let nfsw = data.flags.nsfw ? 'NSFW' : 'SFW';
            let religious = data.flags.religious ? 'Religious' : 'Not Religious';
            let political = data.flags.political ? 'Political' : 'Not Political';
            let racist = data.flags.racist ? 'Racist' : 'Not Racist';
            let sexist = data.flags.sexist ? 'Sexist' : 'Not Sexist';
            let explicit = data.flags.explicit ? 'Explicit' : 'Not Explicit';
            let lang = data.lang;
            response("**Category:** " + category + "\n**Type:** " + type + "\n\n**Name:** " + name + "\n**Description:** " + description + "\n\n**NSFW:** " + nfsw + "\n**Religious:** " + religious + "\n**Political:** " + political + "\n**Racist:** " + racist + "\n**Sexist:** " + sexist + "\n**Explicit:** " + explicit + "\n**Language:** " + lang)
        })
    }
}