// jest-puppeteer.config.js
module.exports = {
    launch: {
      dumpio: true,
      headless: process.env.HEADLESS !== 'false',
    },
    server: {
      command: 'node ./app.js',
      port: 3000,
      launchTimeout: 10000,
      debug: true,
    },
  }