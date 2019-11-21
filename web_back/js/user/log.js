var baseUrl = "http://localhost:8000";
var objLog = {
    login: function(username, password, callback) {
        $.post(baseUrl + "/admin/login", {
            user_name: username,
            password: password
        }, callback)
    },
    offmsg: function(callback) {
        $.get(baseUrl + "/admin/getuser", callback);
    },
    logout: function(callback) {
        $.post(baseUrl + '/admin/logout', callback)
    }
}