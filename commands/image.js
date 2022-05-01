var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    description: "scrapes images online",
    async execute(client, message, args){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Invalid link.');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);

    }

}
         