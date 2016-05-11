/**
 * Created by ollidnanref on 04-05-2016.
 */

//GENERACIÓN DE MODULO 
 var app = angular.module('LoginFormModule',[]);
//(nombre del módulo,arreglo de dependencias)

app.controller('LoginFormController', function ($scope, $http){
    
    //se inicializa un objeto
    $scope.formModel = { };

    //FUNCION QUE LLAMA AL SUBMIT
    //designar un property
    $scope.onSubmit = function () {
        console.log("Suceso");
        console.log($scope.formModel);
    };
});
