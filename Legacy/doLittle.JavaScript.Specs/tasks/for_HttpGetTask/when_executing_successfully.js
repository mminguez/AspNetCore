﻿describe("when executing successfully", function () {

    var url = "somewhere/else";
    var payload = { something: 42 };
    var expectedResult = { some:"result" };

    var server = {
        get: sinon.mock().withArgs(url, payload).returns({
            continueWith: function (callback) {
                callback(expectedResult);
                return this;
            },
            onFail: function () { }
        })
    };

    var result = null;

    var task = Dolittle.tasks.HttpGetTask.create({
        url: url,
        payload: payload,
        server: server
    });
    task.execute().continueWith(function (r) { result = r; });

    it("should continue with the expected result", function () {
        expect(result).toBe(expectedResult);
    });

});