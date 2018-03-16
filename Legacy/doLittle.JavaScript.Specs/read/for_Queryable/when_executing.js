﻿describe("when executing", function () {
        var query = {
            areAllParametersSet: function () {
                return true;
            }
        };
        var observable = ko.observableArray();
        var queryService = null;

        var pagingInfoType = null;
        
        var returnValue = null;
        var queryable = null;
        var region = {};

        beforeEach(function () {
            pagingInfoType = Dolittle.read.PagingInfo;
            Dolittle.read.PagingInfo = {
                create: function () {
                    return {};
                }
            };

            queryService = {
                execute: function () {
                    return {
                        continueWith: function (callback) {
                        }
                    }
                }
            };

            queryable = Dolittle.read.Queryable.new({
                query: query,
                region: region,
                queryService: queryService,
                targetObservable: observable
            });

            returnValue = queryable.execute();

        });

        afterEach(function () {
            Dolittle.read.PagingInfo = pagingInfoType;
        });


        it("should return itself", function () {
            expect(returnValue).toBe(queryable);
        });

    });