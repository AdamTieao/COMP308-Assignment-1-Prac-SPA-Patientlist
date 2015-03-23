
var patientControllers = angular.module("patientControllers", []);

// a memory of patient
var patientMem = [];
var patientEdit;
var index;
var idLength;

// Push the data from json file into the array patientMem[]
patientControllers.controller("PatientCtrl", ['$scope', '$http', function ($scope, $http) {
        
    // get data from Patient.json file
    $http.get('Patient.json')
    .success(function (data, status, headers, config) {
            $scope.patients = data;
            patientMem = data;
        })

    // exception handling
    .error(function (data, stataus, heders, config) {
        alert("error retrieving file");
    });
        $scope.orderProp = "lastName";
        //console.log(patientMem);
    }]);

// Show the list of patients by First Name and Last Name
patientControllers.controller("PatientListCtrl", ['$scope', '$http', function ($scope, $http) {
        $scope.patients = patientMem;
        $scope.orderProp = "lastName";
        console.log(patientMem);
    }]);

    // show the details of each patient
patientControllers.controller('PatientDetailCtrl', ['$scope', '$routeParams','$http','$location',
  function ($scope, $routeParams, $http, $location) {
        
        $scope.fn = /([A-Z]{1}[a-z]*)\w+/;
        $scope.ln = /([A-Z]{1}[a-z]*)\w+/;
        $scope.pn = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        $scope.dt = /^([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0 - 9]{ 4}|[0-9]{ 2})$/;
        
      // check which patient is selected
        console.log($routeParams);

        index = $routeParams.id;

        $scope.patients = patientMem;
        $scope.patient = $scope.patients[index - 1];
        patientEdit = $scope.patients[index - 1];

        $scope.save = function () {
            
            // to check if save() is called
            console.log('save');
            
            // id cannot be changed
            $scope.patient.id = index;

            // add all the data to one object
            $scope.patient = {
                "id": $scope.patient.id, "firstName": $scope.patient.firstName,
                "lastName": $scope.patient.lastName, "phoneNo": $scope.patient.phoneNo,
                "lastVisitDate": $scope.patient.lastVisitDate, "Status": $scope.patient.Status
            };
            
            console.log($scope.patient);
            if (index != -1) {
                patientMem[index - 1] = patientEdit;
                alert("Made change of the patient with ID of: " + $scope.patient.id);
                index = -1;
            }
            else { 
                alert("Please go back to select the patient to edit!");
            }
            
            console.log(patientMem);
            $scope.patient = "";
        }       
            
    }]);

    
    // add a new patient
    patientControllers.controller('PatientNewCtrl', ['$scope', '$routeParams',
    function ($scope, $routeParams) {

        // validation
        $scope.fn = /([A-Z]{1}[a-z]*)\w+/;
        $scope.ln = /([A-Z]{1}[a-z]*)\w+/;
        $scope.pn = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        $scope.dt = /^([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0 - 9]{ 4}|[0-9]{ 2})$/;


        $scope.savePatient = function () {
            
            // to check if savePatient() is called
            console.log('save');
            
            // add all the data to one object
            $scope.patient = {
                "id": patientMem.length + 1, "firstName": $scope.patient.firstName,
                "lastName": $scope.patient.lastName, "phoneNo": $scope.patient.phoneNo,
                "lastVisitDate": $scope.patient.lastVisitDate, "Status": $scope.patient.Status
            };

            console.log($scope.patient);
            patientMem.push($scope.patient);
            alert("Added a patient with ID of: " + $scope.patient.id);
            console.log(patientMem);
            $scope.patient = "";
        }       
        

    }]);