const puppeteer = require('puppeteer');
const devices = puppeteer.devices;
const timeout = 30000;

test('Take screenshot of home page', async () => {
    await page.goto(`${URL}`, {waitUntil: 'domcontentloaded'})
    await page.setViewport({ width: 600, height: 800 });
    await page.screenshot({
        path: './tests/e2e/screenshots/index.jpg',
        fullpage: true,
        type: 'jpeg'
    });
}, timeout);

test('Emulate Mobile Device And take screenshot', async () => {
    await page.goto(`${URL}`, {waitUntil: 'domcontentloaded'})
    const iPhonex = devices['iPhone X'];
    await page.emulate(iPhonex);
    await page.setViewport({ width: 375, height: 812, isMobile: true});
    await page.screenshot({
        path: './tests/e2e/screenshots/index_mobile.jpg',
        fullpage: true,
        type: 'jpeg'
    });
}, timeout);