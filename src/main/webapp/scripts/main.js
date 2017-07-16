/**
 * Created by hbhat on 26-Jun-17.
 */
var myMod = angular.module('myApp', [])
    .controller('myCont', function ($scope, $http) {
        var requestForm = {
            name: "",
            company: "",
            emailAdd: "",
            classifiedRequirements: "",
            address: "",
            phone: "",
            hardcopyRequired: false,
            otime: new Date().toString()
        };
        $scope.requestForm = requestForm;

        $scope.submit = function (valid) {
            if (valid) {
                // console.log($scope.form);
                $http.post('/submit', $scope.requestForm)
                    .then(function (data, status, headers, config) {
                        var $toastContent = $('<span>Your request has been submitted</span>');
                        Materialize.toast($toastContent, 5000);
                        $scope.requestForm = {};
                        $scope.myForm.$setPristine();
                        $scope.myForm.$setUntouched();
                    }).catch(function (data, status, headers, config) {
                    // console.log('Something is wrong!', data);
                    var $toastContent = $('<span style="color: red">Your request could not be submitted! Please try again later.</span>');
                    Materialize.toast($toastContent, 5000);
                });
            }
            else {

            }
        };
    });

$(document).ready(function() {
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
});