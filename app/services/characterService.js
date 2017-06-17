/**
 * Created by mary on 14/06/17.
 */

'use strict';

app.service('characterService',['$http', 'localStorageService', 'api_config', '$rootScope',function($http, localStorageService, api_config,$rootScope) {

    var baseUrl = api_config.url;

    this.getCharacters = function (success, error) {
        $http.get(baseUrl + '/characters'+ api_config.key).then(success, error);
    };


    this.getCharacter = function (id, success,error) {
        $http.get(baseUrl + '/characters/'+ id + api_config.key).then(success, error);
    }


}]);