var objLog = {
    login: function(username, password, callback) {
        $.post("http://localhost:8000/admin/login", {
            user_name: username,
            password: password
        }, callback)
    },
    offmsg: function(callback) {
        $.get("http://localhost:8000/admin/getuser", callback);
    },
    logout: function(callback) {
        $.post('http://localhost:8000/admin/logout', callback)
    }
}