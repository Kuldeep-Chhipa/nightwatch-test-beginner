module.exports = {
    '@disabled': false,

    'window1': function (client) {
        client
            .url('https://www.online.citibank.co.in/')
            .waitForElementPresent('body', 1000)
            .click(".appClose")
            .pause(1000);
    },

    'openWindow2': function (client) {
        client
            .click("img[title='LOGIN NOW']")
            .pause(4000);
    },

    'switchWindow': function (client) {
        client
            .windowHandles(function (result) {
                var handle = result.value[0];
                client.switchWindow(handle);
            })
            .pause(2000)
            .end();
        console.log("Done");
    },
};
