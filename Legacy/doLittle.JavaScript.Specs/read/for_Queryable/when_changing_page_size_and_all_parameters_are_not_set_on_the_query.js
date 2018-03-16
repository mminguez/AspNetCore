﻿describe("when changing page size and all parameters are not set on the query", function () {

    var query = {
        someProperty: ko.observable(),
        areAllParametersSet: function () {
            return false;
        }
    };
    var paging = {
        size: 0,
        number: 0
    };

    var pagingInfoType = null;

    var queryService = null;
    var region = {};

    beforeEach(function () {
        pagingInfoType = Dolittle.read.PagingInfo;

        Dolittle.read.PagingInfo = {
            create: function () {
                return paging;
            }
        };

        queryService = {
            execute: sinon.mock().withArgs(query, paging).never()
        };

        var instance = Dolittle.read.Queryable.create({
            query: query,
            region: region,
            queryService: queryService,
            targetObservable: {}
        });

        instance.size(5);
    });

    afterEach(function () {
        Dolittle.read.PagingInfo = pagingInfoType;
    });


    it("should not execute the query on the query service", function () {
        expect(queryService.execute.verify()).toBe(true);
    });
});