
angular.module('app').directive('loginDir', function(){
    return {
        templateUrl: '../html/loginTmpl.html',
        controller: function($scope, mainSrv){
            $scope.hideExpression = true;
            $scope.checkName = function(userName){
                $scope.loginName = userName;
                console.log('userName', userName)
                if(userName === undefined){
                    alert('sorry, thats not a valid entry')
                }
                else if(!localStorage.userNames){
                    localStorage.setItem('userNames', JSON.stringify( [ { users : userName, userInfo: {}, userProperties: {} } ] ) );
                    $scope.hideExpression = false;
                }
                else {
                    var parsedUserNames = JSON.parse( localStorage.getItem( 'userNames' ) )

                    parsedUserNames.push({ users : userName, userInfo: {}, userProperties: {} } );
                    localStorage.setItem('userNames', JSON.stringify(parsedUserNames))

                    $scope.hideExpression = false;

                }
            }
        },
        link: function(scope, element, attributes){






        },
        scope: {
            example: '@',
            loginName: '='
        }

    }

})