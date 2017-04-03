var thisApp = angular.module("TestApplication", []);

thisApp.controller("TestController", ["$scope",function($scope){
    $scope.data=[
        {jersey:8, player:"Steven Gerrard", games:700, substitutes:58, goals:200, assists:79,
        cleanSheets:0, yellowCards:59,redCards:7},
        {jersey:9, player:"Fernando Torres", games:123, substitutes:33, goals:112, assists:36,
        cleanSheets:0, yellowCards:23,redCards:0},
        {jersey:10, player:"Philippe Coutinho", games:100, substitutes:13, goals:23, assists:36,
        cleanSheets:0, yellowCards:16,redCards:0},
        {jersey:1, player:"Pepe Reina", games:300, substitutes:1, goals:0, assists:9,
        cleanSheets:80, yellowCards:5,redCards:1}
    ]
}
]);