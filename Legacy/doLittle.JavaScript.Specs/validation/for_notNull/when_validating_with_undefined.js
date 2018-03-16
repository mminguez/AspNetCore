﻿describe("when validating with undefined", function () {
    var validator = Dolittle.validation.notNull.create({ options: {} });
    var result = validator.validate();

    it("should not be valid", function () {
        expect(result).toBe(false);
    });
});