var patientControllers = angular.module("patientControllers", []);

patientControllers.controller("PatientListCtrl", ['$scope', '$http', function ($scope, $http) {
    
    $http.get('Patient.json')
    .success(function (data, status, headers, config) {
        $scope.patients = data;
    })
    .error(function (data, stataus, heders, config) {
        alert("error retrieving file");
    });
    $scope.orderProp = "lastName";
    }]);


patientControllers.controller('PatientDetailCtrl', ['$scope', '$routeParams','$http','$location',
  function ($scope, $routeParams, $http,$location) {

        console.log($routeParams);

        var id = $routeParams.id;

        $http.get('Patient.json')
    .success(function (data, status, headers, config) {
            $scope.patients = data;
            console.log(id);
            console.log($scope.patients[id - 1]);
            $scope.patient = $scope.patients[id - 1];
            console.log($scope.patient);

        })
    .error(function (data, stataus, heders, config) {
            alert("error retrieving file");
        });
            
    }]);

    

    patientControllers.controller('PatientNewCtrl', ['$scope', '$routeParams',
    function ($scope, $routeParams) {

        $scope.fn = /([A-Z]{1}[a-z]*)\w+/;
        $scope.ln = /([A-Z]{1}[a-z]*)\w+/;
        $scope.pn = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


        $scope.savePatient = function () {
            var isValid = false;
            console.log('save');
            $scope.patient = {
                "id": $scope.patient.id, "firstName": $scope.patient.firstName,
                "lastName": $scope.patient.lastName, "phoneNo": $scope.patient.phoneNo,
                "lastVisitDate": $scope.patient.lastVisitDate,"Status":$scope.patient.Status
            };

            console.log($scope.patient);
        }

        
        
        $scope.reset = function () {
            this.patient = {};
        };
        
        $scope.reset();

        ///...more logic
    }]);
    

//First Name: <span class="label label-primary">{ { patient.firstName }}</span> Last Name: <span class="label label-primary">{ { patient.lastName }}</span><br />
//Phone Number: <span class="label label-primary">{{ patient.phoneNo }}</span><br />
//Last Visit Date: <span class="label label-primary">{{patient.lastVisitDate}}</span><br />
//Status: <span class="label label-primary">{{patient.Status}}</span>  {{patient.id}},{{patient.firstName}},{{patient.lastName}},{{patient.phoneNo}},{{patient.lastVisitDate}},{{patient.Status}}