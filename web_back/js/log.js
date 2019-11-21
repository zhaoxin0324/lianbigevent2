var objLog = {
    login: function(username, password, callback) {
        $.post(BASEURL.logIn, {
            user_name: username,
            password: password
        }, callback)
    },
    offmsg: function(callback) {
        $.get(BASEURL.offSet, callback);
    },
    logout: function(callback) {
        $.post(BASEURL.offSet.LogOut, callback)
    }
}