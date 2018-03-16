﻿describe("when creating with required rule", function () {
    var options = { something: "hello world" };
    var validator = null;
    var required = null;

    beforeEach(function () {
        required = {
            _name: "required",
            create: sinon.stub()
        };
        Dolittle.validation.Rule = {
            getExtenders: function () {
                return [required];
            }
        }

        validator = Dolittle.validation.Validator.create({
            required: options
        });
    });

    it("should mark the validator as required", function () {
        expect(validator.isRequired).toBe(true);
    });
});