/**
 * Created by mary on 13/06/17.
 */
'use strict';

app.controller("comicListController",['$scope','comicService', function ($scope, comicService){
    $scope.listAllComics ;



    $scope.getAllComics = function() {
        comicService.listComics( function (response) {
            if (response.status == 200) {
                $scope.comics  = response.data.data.results;
            }
        }, function (data) {
            swal(data, "error");
        });
    };

    $scope.getAllComics();

}]);