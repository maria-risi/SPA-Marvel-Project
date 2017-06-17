/**
 * Created by mary on 14/06/17.
 */

'use strict';

app.service('comicService',['$http', 'localStorageService', 'api_config', '$rootScope',function($http, localStorageService, api_config,$rootScope) {

    var baseUrl = api_config.url;


    this.getComics = function (success, error) {
        $http.get(baseUrl + '/comics'+ api_config.key).then(success, error);
    };

    this.getComic = function (id, success, error) {
        $http.get(baseUrl + '/comics/'+ id + api_config.key).then(success, error);
    };


}]);