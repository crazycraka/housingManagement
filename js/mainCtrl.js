/**
 * Created by scott on 11/30/16.
 */

angular.module('app').controller('mainCtrl', function($scope){
    $scope.checkName = function(userName){
        console.log(userName);
    if( userName = undefined ){
        alert("not a valid entry");
    }

    else if( !localStorage.userNames ){
        localStorage.setItem('userNames', JSON.stringify( [ userName ] ) );
    }

    else if ( localStorage.userNames ) {

        var parsedUserNames = JSON.parse( localStorage.userNames );
        console.log(parsedUserNames);
        parsedUserNames.push(userName);
        console.log( parsedUserNames );
        localStorage.setItem( 'userNames', JSON.stringify( parsedUserNames ) );
        console.log('after set', localStorage.userNames);
    }







    }

});