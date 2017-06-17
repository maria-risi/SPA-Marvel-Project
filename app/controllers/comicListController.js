/**
 * Created by mary on 14/06/17.
 */
'use strict';

app.controller("comicListController",['$scope','comicService','characterService','$filter', '$rootScope', function ($scope, comicService,characterService, $filter,$rootScope){
    $scope.characters = null ;
    $scope.comics = null;
    $scope.characterDetails = null;
    $scope.modal = false;
    $scope.selectedComic = null;
    $scope.selectedCharacter = null;
    $scope.comicAdded = false;
    $scope.characterModal = false;
    $scope.comicModal = false;
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = [];
    var idComic = 0;


    $scope.openModal = function(comesfrom, item){
        var comicURI = "";

        if( comesfrom == 'character'){
            $scope.characterModal = true;
            $scope.selectedCharacter = item;

        }else{ //comes from comic modal
            // obtain a id from comicURI, example URI:  "http://gateway.marvel.com/v1/public/characters/1011334/comics"
            $scope.comicModal = true;
            comicURI =  (item.resourceURI).split("/");

            idComic = parseInt(comicURI[6]);

            $scope.getComic(idComic);
        }
        $rootScope.modal = true;
    };


    $scope.closeModal = function(comesfrom){
        if( comesfrom == 'character'){

            $scope.selectedCharacter = null;
            $scope.characterModal = false;

        }else{ //comes from comic modal

            $scope.selectedComic = null;
            $scope.comicModal = false;
        }
        $rootScope.modal = false;

    };


    $scope.getCharacters = function() {
        characterService.getCharacters( function (response) {
            if (response.status == 200) {
                $scope.characters  = response.data.data.results;
            }
        }, function (data) {
            //swal(data, "error");
        });
    };


    $scope.getComics = function() {
        comicService.getComics( function (response) {
            if (response.status == 200) {
                $scope.comics  = response.data.data.results;
            }
        }, function (data) {
            //swal(data, "error");
        });
    };


    $scope.getCharacter = function (idCharacter) {
        characterService.getCharacter(idCharacter, function (response) {
            if (response.status == "Ok") {
                $scope.characterDetails = response.data.data.results;
            }
        }, function (data) {
            // swal(data, "error");
        });
    };


    $scope.getComic = function (idComic) {
        comicService.getComic(idComic, function (response) {
            if (response.status == 200){
                $scope.selectedComic = response.data.data.results[0];
                if($scope.selectedComic.description == null || $scope.selectedComic.description == undefined){
                    $scope.selectedComic.description = "The spectacular sequel to last year's OFFICIAL HANDBOOK OF THE MARVEL UNIVERSE: SPIDER-MAN 2004, this Official Handbook contains in-depth bios on more than 30 of the wisecracking web-slinger's closest allies and most infamous enemies - including the Stacy Twins, fresh from the pages of AMAZING SPIDER-MAN, and Toxin, in time for this month's TOXIN #1! Plus: An all-new cover by superstar artist Tom Raney, digitally painted by Morry Hollowell.";
                }
            }
        }, function (data) {
            // swal(data, "error");
        });
    };



    $scope.deleteComic =  function (comic) {
        swal({
            title: "Are you sure?",
            text: "You want to remove "+ comic.title +" from your favorite comics",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, I am sure!',
            cancelButtonText: "No, cancel it!",
            closeOnConfirm: false,
            closeOnCancel: false
        });

    };


    $scope.addItemToCart = function (itemName) {
        if( itemName != null && itemName != undefined){

            swal({
                title: "Are you sure?",
                text: "You want to add "+ itemName +" to shopping cart",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Yes, I am sure!',
                cancelButtonText: "No, cancel it!",
                closeOnConfirm: false,
                closeOnCancel: false
            });
        }
    };

    $scope.showDetails = function (character) {
        swal({
            title: "Character Details",
            text: character.description,
            type: "success",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'OK',
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: false
        });
    };

    $scope.addToFavourites = function(){
        $scope.comicAdded = true;
    };

    $scope.deleteToFavourites = function(){
        $scope.comicAdded = false;
    };

    $scope.getCharacters();

    $scope.getComics();

/*
    $scope.getCharacter(1011334);
    $scope.getComic(21366);*/



    /*pagination and filter*/

    $scope.getData = function () {

        return $filter('filter')($scope.data, $scope.search)

    };

    $scope.numberOfPages=function(){
        return Math.ceil($scope.getData().length/$scope.pageSize);
    };

    for (var i=0; i<20; i++) {
        $scope.data.push("Item "+i);
    }



}]);
