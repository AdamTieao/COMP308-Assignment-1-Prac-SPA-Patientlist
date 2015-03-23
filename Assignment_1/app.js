var app = angular.module("patientApp", ['ngRoute', 'patientControllers']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider
        // go to PatientList.html
        .when('/', {
            templateUrl: 'Views/PatientList.html',
            controller: 'PatientCtrl'
        })
        .when('/Patients', {
            templateUrl: 'Views/PatientList.html',
            controller: 'PatientListCtrl'
        })
        // go to PatientNew.html
        .when('/NewPatient', {
            templateUrl: 'Views/PatientNew.html',
            controller: 'PatientNewCtrl'
        })
        // go to PatientDetails.html
        .when('/PatientDetails/:id', {
            templateUrl: 'Views/PatientDetails.html',
            controller: 'PatientDetailCtrl'
        })
        // exception
        .otherwise({
            redirectTo: '/'
        });
        
    }]);