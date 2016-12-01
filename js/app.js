/**
 * Created by scott on 11/30/16.
 */

angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('login', {
            templateUrl: '../html/loginTmpl.html',
            url: '/login'
        })
        .state('displayHousing', {
            templateUrl: '../html/displayHousingTmpl.html',
            url: '/displayHousing'
        })
})