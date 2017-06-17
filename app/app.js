'use strict';

/**
 * @ngdoc overview
 * @Marvel Api
 * @SPA application for displaying marvel characters and their respective asociated comics
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

