const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Test proper layout of the page', () => {
    test('Page Title', async () => {
        const title = await page.title();
        expect(title).toBe('URL Filter');
    }, timeout);

    test('Header of the page', async () => {
        const h1Handle = await page.$('#pageheader');
        const html = await page.evaluate(h1Handle => h1Handle.innerHTML, h1Handle);

        expect(html).toBe("URL Filter");
    }, timeout);

    
});