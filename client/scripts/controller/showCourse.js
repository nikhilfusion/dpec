app.controller('showCourseController', ['$scope', 'commonData', 'cookieService', function($scope, commonData, cookieService) {
    $scope.userDtls = cookieService.getCookie();
    $scope.courseInfo = commonData.sessions; 
    $scope.commentflg = false;
    $scope.index = 0;
    $scope.nextFlg = true;
    $scope.prevFlg = false;
    var commentArray = [];
    $scope.next = function() {
        $scope.index++;
        if($scope.index < $scope.courseInfo.length - 1 && $scope.index >=0) {
            $scope.nextFlg = true;
        } else {
            $scope.nextFlg = false;
        }
        if($scope.index >=1 && $scope.index < $scope.courseInfo.length) {
            $scope.prevFlg = true;
        } else {
            $scope.prevFlg = false;
        }
    };
    $scope.prev = function() {
        $scope.index--;
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
}]);