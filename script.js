var myapp = angular.module('myapp', ['ui.router','ui.bootstrap']);
myapp.config(function($stateProvider, $urlRouterProvider){
  
  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/route1")
  
  $stateProvider
	.state('route1', {
		url: "/route1",
		templateUrl: "about.html"
	})
	  
	.state('route2', {
		url: "/route2",
		templateUrl: "work.html"
	})

});
	
	

myapp.controller('clickCtrl', function($scope,$location,$http) {
	angular.element(document).ready(function () {
        //$location.path( '/route2' );
		//$scope.loadPeople();
    });
});

myapp.controller('myCtrl', function($scope,$location,$http) {
	angular.element(document).ready(function () {
        $scope.myData=[];
		$scope.loadPeople = function() {
			$http({method: 'GET', url: 'js/rr.json'}).
				success(function(data, status, headers, config) {
					$scope.myData = data;
					//$scope.myData.name=$scope.myData.name;
				}).
				error(function(data, status, headers, config) {
					console.log("Error: "+data);
				});
		}
		$scope.loadPeople();
				
    });
	
	$scope.getClass = function(path) {
		if ($location.path().substr(0, path.length) == path) {
			return "active"
		} else {
			return ""
		}
	}
	
});


