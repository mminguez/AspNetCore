﻿using doLittle.CodeGeneration.JavaScript;
using Machine.Specifications;

namespace doLittle.Specs.CodeGeneration.JavaScript.for_ObservableExtension.given
{
    public class an_observable_without_default_value
    {
        protected static Observable observable;

        Establish context = () => observable = new Observable();
    }
}
