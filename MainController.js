// Code goes here

(function(){
  var app = angular.module("githubViewer");
  var MainController = function($scope, $interval, $log,  $location){
   
    var decrementCountdown = function(){
      $scope.countdown -= 1;
      if($scope.countdown < 1){
        $scope.search($scope.username);
      }
    };
    var countdownInterval = null;
    var startCountdown = function(){
      countdownInterval = $interval(decrementCountdown, 1000, $scope, $scope.countdown);
      
    };
    $scope.search = function(username){
      $log.info("Searching for" + username);
      if(countdownInterval){
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      //go to the right route
      $location.path("/user/" + username);
    };
    $scope.username = "angular";
    $scope.countdown = 5;
    startCountdown();
    
  };
  app.controller("MainController", MainController);
  
}())