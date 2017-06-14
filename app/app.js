'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 *
 * Main module of the application.
 */
var app = angular.module('app', [
    'ui.router',
    'LocalStorageModule',
    'config'
])
    .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.setLoader = function(val){
            if(val == true){
                $("html").append('' +
                    '<div id="shadowBox" class="shadowBox">' +
                        '<div id="loader" class="sk-cube-grid centered">' +
                            '<div class="sk-cube sk-cube1"></div> ' +
                            '<div class="sk-cube sk-cube2"></div>' +
                            '<div class="sk-cube sk-cube3"></div>' +
                            '<div class="sk-cube sk-cube4"></div> ' +
                            '<div class="sk-cube sk-cube5"></div> ' +
                            '<div class="sk-cube sk-cube6"></div> ' +
                            '<div class="sk-cube sk-cube7"></div>' +
                            '<div class="sk-cube sk-cube8"></div> ' +
                            '<div class="sk-cube sk-cube9"></div> ' +
                        '</div>' +
                    '</div>').addClass("disabled");
            }else{
                $("html").removeClass("disabled");
                $("#loader").remove();
                $("#shadowBox").remove();
            }
        };

        $rootScope.$on('$stateChangeSuccess', function(event, toState) {

            event.targetScope.$watch('$viewContentLoaded', function () {

                angular.element('html, body, #content').animate({ scrollTop: 0 }, 200);

                setTimeout(function () {
                    angular.element('#wrap').css('visibility','visible');

                    if (!angular.element('.dropdown').hasClass('open')) {
                        angular.element('.dropdown').find('>ul').slideUp();
                    }
                }, 200);
            });
            $rootScope.containerClass = toState.containerClass;
        });


    }])


    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/app/comicList');

        $stateProvider

            .state('app', {
                url: '/app',
                controller: 'mainController',
                templateUrl: 'app/views/app.html'
            })

            .state('app.comicList', {
                url: '/comicList',
                controller: 'comicListController',
                templateUrl: 'app/views/comicStore/comicList.html'
            })


    }]);

