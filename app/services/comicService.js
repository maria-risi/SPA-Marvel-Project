/**
 * Created by mary on 13/06/17.
 */
/**
 * Created by fr3d0 on 7/23/16.
 */
'use strict';

app.service('comicService',['$http', 'localStorageService', 'api_config',function($http, localStorageService, api_config) {

    var baseUrl = api_config.url;

    this.listComics = function (success, error) {
        $http.get(baseUrl + '/characters'+ api_config.key).then(success, error);
    };

}]);