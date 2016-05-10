/**
 * Created by ollidnanref on 04-05-2016.
 */

//GENERACIÓN DE MODULO 
 var app = angular.module('LoginFormModule',[]);
//(nombre del módulo,arreglo de dependencias)

app.controller('LoginFormController', function ($scope, $http){
    $scope.formModel = {  };

    //FUNCION QUE LLAMA AL SUBMIT
    $scope.onSubmit = function () {
        console.log("Se llegó");
        console.log($scope.formModel);
    };
});
