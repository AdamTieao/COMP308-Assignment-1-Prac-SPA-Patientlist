var app = angular.module("patientApp", ['ngRoute', 'patientControllers']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider
        //serve up the list of customers
        .when('/Patients', {
            templateUrl: 'Views/PatientList.html',
            controller: 'PatientListCtrl'
        })
        .when('/NewPatient', {
            templateUrl: 'Views/PatientNew.html',
            controller: 'PatientNewCtrl'
        })
        .when('/PatientDetails/:id', {
            templateUrl: 'Views/PatientDetails.html',
            controller: 'PatientDetailCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
        
    }]);