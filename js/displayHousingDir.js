angular.module('app').directive('displayHousingDir', function(){

    return {
        templateUrl: '../html/displayHousingTmpl.html',
        restrict: 'E',
        scope: {
            accountHolder: '='
        },
        controller: function($scope, mainSrv){
            $scope.revealHousing = true;
            $scope.userProfile = JSON.parse( localStorage.getItem('userName') );
            console.log('in displayHousing', $scope.accountHolder);

        },
        link: function(scope, element, attributes){
            console.log('displayHousing is connected')
        }

    }
})