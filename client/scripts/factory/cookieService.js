app.factory('cookieService', ['$cookieStore', function ($cookieStore) {
    var cookieData,commentData = [];
    return {
        setCookie : function (dtls) {
            $cookieStore.put('dtls', dtls);
            //cookieData = $cookieStore.get('dtls');
            //return cookieData;
        },
        getCookie : function() {
            cookieData = $cookieStore.get('dtls');
            return cookieData;
        },
        clearUserCookie : function() {
            var data = {};
            $cookieStore.put('dtls', data);
        },
        setComment : function(comment) {
            commentData = $cookieStore.get('comment');
            if(commentData && commentData.length > 0) {
                commentData.push(comment);
            } else {
                commentData = [];
                commentData.push(comment);
            }
            $cookieStore.put('comment', commentData);
        },
        getComment : function() {
            commentData = $cookieStore.get('comment');
            return commentData;
        }
    }
}])