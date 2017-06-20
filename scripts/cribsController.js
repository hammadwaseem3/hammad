angular
    .module('ngCribs')
    .controller('cribsController',function($scope,cribsFactory){
        $scope.hello = 'hello world!';
        $scope.cribs ;
        cribsFactory.getCribs().then(function (success){
            $scope.cribs=success.data;
        },function (error){
            console.log(error);
        });

        $scope.sayHello = function(){
            console.log("hello");
        }
    });