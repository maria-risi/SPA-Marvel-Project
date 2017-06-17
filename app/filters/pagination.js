
/**
 * Created by mary on 14/06/17.
 */

app.filter('startFrom', function() {
    return function(input, start) {
        if (input != undefined && input != null){
            start = +start; //parse to int
            return input.slice(start);
        }
    }
});
