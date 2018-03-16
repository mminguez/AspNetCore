Dolittle.namespace("Dolittle.validation", {
    greaterThan: Dolittle.validation.Rule.extend(function() {
        var self = this;

        function notSet(value) {
            return Dolittle.isUndefined(value) || Dolittle.isNull(value);
        }

        function throwIfOptionsInvalid(options) {
            if (notSet(options)) {
                throw new Dolittle.validation.OptionsNotDefined();
            }
            if (notSet(options.value)) {
                var exception = new Dolittle.validation.OptionsValueNotSpecified();
                exception.message = exception.message + " 'value' is not set.";
                throw exception;
            }
            throwIfValueToCheckIsNotANumber(options.value);
        }

        function throwIfValueToCheckIsNotANumber(value) {
            if (!Dolittle.isNumber(value)) {
                throw new Dolittle.validation.NotANumber("Value " + value + " is not a number");
            }
        }

        this.validate = function (value) {
            throwIfOptionsInvalid(self.options);
            if (notSet(value)) {
                return false;
            }
            throwIfValueToCheckIsNotANumber(value);
            return parseFloat(value) > parseFloat(self.options.value);
        };
    })
});
