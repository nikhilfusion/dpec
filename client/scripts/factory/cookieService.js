app.factory('cookieService', ['$cookieStore', function ($cookieStore) {
    var cookieData;
    return {
        setCookie : function (dtls) {
            console.log("dtls", dtls);
            $cookieStore.put('dtls', dtls);
            cookieData = $cookieStore.get('dtls');
            return cookieData;
        },
        getCookie : function() {
            cookieData = $cookieStore.get('dtls');
            return cookieData;
        }
    }
}])