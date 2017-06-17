/**
 * Created by mary on 14/06/17.
 */

app.factory('httpRequestInterceptor',['localStorageService','$window', 'api_config',function (localStorageService, $window,api_config) {

    return {

    };
}]);

app.config(['$httpProvider',function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
}]);
