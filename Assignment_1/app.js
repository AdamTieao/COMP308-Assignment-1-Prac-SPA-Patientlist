var app = angular.module("patientApp", []);

app.controller("PatientCtrl", function ($scope, $http) {
    
    $http.get('Patient.json')
    .success(function (data, status, headers, config) {
        $scope.patients = data;
    })
    .error(function (data, stataus, heders, config) {
        alert("error retrieving file");
    });
    $scope.orderProp = "firstName";
});
