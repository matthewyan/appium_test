describe('The counter screen', () => {
    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000    // timeout: 10 seconds
    });

    it('should sum correctly', async () => {
        const add = await $('~add_button')
        await add.click()
        await add.click()

        const sub = await $('~sub_button')
        await sub.click()

        await add.click()

        const lab = await $('~value_label')
        expect(await lab.getText()).toBe("2")
    });
});
