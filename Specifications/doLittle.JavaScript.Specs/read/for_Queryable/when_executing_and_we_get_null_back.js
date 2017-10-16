﻿describe("when executing and we get null back", function () {
        var query = {
            areAllParametersSet: function () {
                return true;
            }
        };
        var observable = ko.observableArray();
        var queryService = null;
        var region = {};

        var pagingInfoType = null;

        beforeEach(function () {
            pagingInfoType = doLittle.read.PagingInfo;
            doLittle.read.PagingInfo = {
                create: function () {
                    return {};
                }
            };

            queryService = {
                execute: function () {
                    return {
                        continueWith: function (callback) {
                            callback(null);
                        }
                    }
                }
            };

            var queryable = doLittle.read.Queryable.create({
                query: query,
                region: region,
                queryService: queryService,
                targetObservable: observable
            });

            queryable.execute();

        });

        afterEach(function () {
            doLittle.read.PagingInfo = pagingInfoType;
        });


        it("should populate the target observable", function () {
            expect(observable()).toEqual([]);
        });

    });