/**
 * Created by mary on 14/06/17.
 */
app.filter('searchCharacter',['$rootScope', function($rootScope) {
    return function(items, searchText) {
        var filtered = [];

        var final = items;
        if (searchText != null){
            searchText = searchText.toLowerCase();
            angular.forEach(items, function (item) {
                if(item != null && item != undefined){
                    if (item.name != null && item.name != undefined){
                        if (item.name.toLowerCase().indexOf(searchText.trim()) >= 0){
                            if (filtered.indexOf(item) < 0){
                                filtered.push(item);
                            }
                        }
                    }
                }
            });
            final = filtered;
        }

        return final;
    }
}]);