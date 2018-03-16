﻿describe("when creating", function () {
    var existingOperationEntryType = null;

    var operationEntry = {
        something: 42
    };

    var operation = {
        someOperation: 44
    };

    var operationState = {
        someState: 45
    };

    var instance = null;

    var operationEntryType = null;

    beforeEach(function () {
        existingOperationEntryType = Dolittle.interaction.OperationEntry;

        operationEntryType = {
            create: sinon.mock().withArgs({
                operation: operation,
                state: operationState
            }).returns(operationEntry)
        };

        Dolittle.interaction.OperationEntry = operationEntryType;

        var factory = Dolittle.interaction.operationEntryFactory.create();
        instance = factory.create(operation, operationState);
    });

    afterEach(function () {
        Dolittle.interaction.OperationEntry = existingOperationEntryType;
    });
    
    it("should create a new instance", function () {
        expect(operationEntryType.create.called).toBe(true);
    });

    it("should return the created instance", function () {
        expect(instance).toBe(operationEntry);
    });
});