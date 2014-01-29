﻿angular.module("umbraco").controller("NuGet.InstalledPackagesController",
    function ($scope, nugetResource) {

        //Set is loading flag until JSON comes back from oData call
        $scope.isLoading = true;

        nugetResource.getInstalledPackages().then(function (response) {

            //Now we have JSON data let's turn off the loading message/spinner
            $scope.isLoading = false;

            //Set a scope object from the JSON we get back
            $scope.rows             = response.data.Rows;
            $scope.packageCount     = response.data.TotalItems;
            $scope.prevPageNumber   = response.data.PreviousLink;
            $scope.nextPageNumber   = response.data.NextLink;

        });

        //Get More Packages - click
        $scope.getPage = function (pageNumber) {

            //Set is loading to true again
            $scope.isLoading = true;

            nugetResource.getInstalledPackagesPage(pageNumber).then(function (response) {

                //Now we have JSON data let's turn off the loading message/spinner
                $scope.isLoading = false;

                //Set a scope object from the JSON we get back
                $scope.rows             = response.data.Rows;
                $scope.packageCount     = response.data.TotalItems;
                $scope.prevPageNumber   = response.data.PreviousLink;
                $scope.nextPageNumber   = response.data.NextLink;

            });
        };

    });