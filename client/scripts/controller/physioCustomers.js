app.controller('physioCustomersController', ['$scope', 'userService', '$location', 'cookieService', 'commonData', '$state',
    function($scope, userService, $location, cookieService, commonData, $state) {
 		$scope.getCustomer = function() {
 			$scope.customers = commonData.customers;
 		};
 		$scope.editUser = function(dtls) {
 			console.log("dtls", dtls);
 			$state.go("physioCustomerDtls" , {userId : dtls.id});
 		};
 		$scope.editUsrDtls = function() {
 			var customerDtls = commonData.customers;
 			var userId = $state.params.userId;
 			for(var i=0;i<customerDtls.length;i++) {
 				if(customerDtls[i].id == parseInt(userId)) {
 					$scope.customer = customerDtls[i];
 					console.log("$scope.customer", $scope.customer);
 					break;
 				}
 			}
 		};
 }])