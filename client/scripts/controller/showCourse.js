app.controller('showCourseController', ['$scope', 'commonData', 'cookieService', '$uibModal', '$rootScope', function($scope, commonData, cookieService, $uibModal, $rootScope) {
    $scope.userDtls = cookieService.getCookie();
    $scope.courseInfo = commonData.sessions; 
    $scope.commentflg = false;
    $scope.index = 0;
    $scope.nextFlg = true;
    $scope.prevFlg = false;
    //var modalInstance;
    var commentArray = [];
    $scope.next = function() {
        $scope.index++;
        if($scope.courseInfo[$scope.index].feedbackNeeded) {
            openModal();
        }
        checkStatus();
    };
    $scope.prev = function() {
        $scope.index--;
        if($scope.courseInfo[$scope.index].feedbackNeeded) {
            openModal();
        }
        checkStatus();
    };

    function checkStatus()
    {
        if($scope.index >=1 && $scope.index < $scope.courseInfo.length) {
            $scope.prevFlg = true;
        } else {
            $scope.prevFlg = false;
        }
        if($scope.index < $scope.courseInfo.length - 1 && $scope.index >=0) {
            $scope.nextFlg = true;
        } else {
            $scope.nextFlg = false;
        }
    };

    $scope.displayComment = function() {
        $scope.commentflg = true;
    };
    
    $scope.enterComment = function(cmnt, courseDtls) {
        commentArray.push(cmnt);
        $scope.comment = "";
        $scope.commentArray = commentArray;
        var cookieData = {
            "therapistId" : courseDtls.therapistId,
            "comment" : cmnt,
            "userId"  : $scope.userDtls.id,
            "courseId": courseDtls.courseId
        };
        cookieService.setComment(cookieData);
    }

    function openModal() {
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'views/user/feedback.html',
            controller: 'feedBackCtrl',
            backdrop   : 'static',
            size : 600
        });
    };

    $rootScope.$on('feedback', function(evt, args) {
        console.log("args", args);
        if(args) {
        } else {
            $scope.index-=2;
        }
        checkStatus();
    });
}]);