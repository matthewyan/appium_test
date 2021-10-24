class CounterPage {
    get subButton() { return $("~sub_button"); }
    get addButton() { return $("~add_button"); }
    get valueLabel() { return $("~value_label"); }
    get value() { return this.valueLabel.getText(); }

    sum() {
        // await this.addButton.click();

        async () => {
            const elem = await $('~add_button')
            await elem.click()
        }

    }

    sub() {
        this.subButton.click();
    }
}

module.exports = new CounterPage();
