/**
 * Created by scott on 11/30/16.
 */

angular.module('app').controller('mainCtrl', function($scope){

    $scope.checkName = function(userName){
        if( userName === undefined ){
            alert("not a valid entry");
        }

        else if( !localStorage.userNames ){
            localStorage.setItem('userNames', JSON.stringify( [ { user: $scope.userName, info: [], realEstate: [] } ] ) );
        }



        else if ( localStorage.userNames  ) {
            var keepGoing = true;

            var parsedUsers = JSON.parse( localStorage.userNames );
            for(var i = 0; i < parsedUsers.length; i++){
                if(parsedUsers[i].user === $scope.userName){
                    alert('we have a duplicate');
                    keepGoing = false;
                }
            }

            if(keepGoing) {
                var parsedUserNames = JSON.parse( localStorage.userNames );
                parsedUserNames.push(  { user: $scope.userName, info: [], realEstate: [] } );
                $scope.users = parsedUserNames;
                localStorage.setItem( 'userNames', JSON.stringify( parsedUserNames ) );
            }

            $scope.userName = '';
            console.log('hurray, we\'re are the end');

        }

    }

});