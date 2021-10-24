const CounterPage = require('../pageobjects/counter.page');

describe('The counter screen', () => {
    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 6000
    });

    it('should sum correctly', async () => {

        // CounterPage.sum();

        const elem = await $('~add_button')
        await elem.click()


        const lab = await $('~value_label')
        expect(await lab.getText()).toBe("1")

        

        // expect(CounterPage.value).toBe("1");


        // CounterPage.sum();
        // jasmine.clock().tick(500);

        // CounterPage.sub();
        // jasmine.clock().tick(500);

        // CounterPage.sum();
        // jasmine.clock().tick(10500);

        // expect(CounterPage.value).toBe("2");
    });
});
