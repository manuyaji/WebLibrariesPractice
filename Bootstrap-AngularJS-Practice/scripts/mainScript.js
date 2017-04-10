var thisApp = angular.module("TestApplication", ["ngRoute"]);

thisApp.config(
    function($routeProvider){
        $routeProvider.when("/players", {
            templateUrl:"templates/players-list.html",
            controller:"TestController"
            //controller:"playersListController"
        })
        .when("/players/add", {
            templateUrl:"templates/players-individual.html",
            controller:"playersAddController"
        })
        .when("/players/:player", {
            templateUrl:"templates/players-individual.html",
            controller:"playersIndividualViewController"
        })
        .when("/players/edit/:player", {
            templateUrl:"templates/players-individual.html",
            controller:"playersEditController"
        })
        .otherwise({
            redirectTo:"/players"
        })
    }
)

/*
thisApp.factory("basePlayerService", ["$rootScope", function($rootScope){

    var svc = {};
    
    var data = [
            {jersey:8, player:"Steven Gerrard", games:700, substitutes:58, goals:200, assists:79,
            cleanSheets:0, yellowCards:59,redCards:7},
            {jersey:9, player:"Fernando Torres", games:123, substitutes:33, goals:112, assists:36,
            cleanSheets:0, yellowCards:23,redCards:0},
            {jersey:10, player:"Philippe Coutinho", games:100, substitutes:13, goals:23, assists:36,
            cleanSheets:0, yellowCards:16,redCards:0},
            {jersey:1, player:"Pepe Reina", games:300, substitutes:1, goals:0, assists:9,
            cleanSheets:80, yellowCards:5,redCards:1}
        ];

    svc.getPlayers = function(){
        return data;
    }

    svc.addPlayer = function(player){
        data.push(player);
    }

    svc.viewPlayer = function(playerIndex){
        return data[playerIndex];
    }

    svc.editPlayer = function(playerIndex, player){
        data[playerIndex] = player;
    }

    return svc;

}]);

thisApp.controller("playersListController", ["$scope","$location","$routeParams",//"basePlayerService",
    function($scope, $location, $routeParams){
        
        //$scope.data=$basePlayerService.getPlayers();

        $scope.addPlayer=function(){
            //alert("Na na na na na na");
            $location.path("/players/add");
        }

        $scope.viewPlayer=function(player){
            //alert(player);
            $location.path("/players/"+player);
        }
    }
]);
*/

thisApp.controller("playersAddController", ["$scope","$location","$routeParams",//"basePlayerService",
    function($scope, $location, $routeParams){
        
        //$scope.data=basePlayerService.getPlayers();

        $scope.save = function(){
            $location.path("/players/"+playerIndex);
        };

        $scope.cancel = function(playerIndex){
            $location.path("/players");
        };
    }
]);

thisApp.controller("playersEditController", ["$scope","$location","$routeParams",//"basePlayerService",
    function($scope, $location, $routeParams){
        
        //$scope.data=basePlayerService.getPlayers();

        $scope.addPlayer = function(){
            $location.path("/players/add");
        };

        $scope.viewPlayer = function(playerIndex){
            $location.path("/players/"+playerIndex);
        };
    }
]);

thisApp.controller("playersIndividualViewController", ["$scope","$location","$routeParams",//"basePlayerService",
    function($scope, $location, $routeParams){
        
        //$scope.data=basePlayerService.getPlayers();

        $scope.addPlayer = function(){
            $location.path("/players/add");
        };

        $scope.viewPlayer = function(playerIndex){
            $location.path("/players/"+playerIndex);
        };
    }
]);

thisApp.controller("TestController", ["$scope", "$location", "$routeParams", 
    function($scope, $location, $routeParams){
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

        $scope.addPlayer=function(){
            //alert("Na na na na na na");
            $location.path("/players/add");
        }

        $scope.viewPlayer=function(player){
            //alert(player);
            $location.path("/players/"+player);
        }
    }
]);