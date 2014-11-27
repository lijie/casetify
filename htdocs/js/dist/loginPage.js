/*! casetagram 2014-11-05 */
$(function() {
    var a = function() {
        showSuccessMessage(__("Login successful")),
        Server.redirect ? window.location.href = Server.redirect: window.location.reload()
    },
    b = function() {
        showErrorMessage(__("Login not successful"))
    };
    $("#facebook-login-btn").click(function() {
        return Login.facebookLogin(a, b),
        !1
    }),
    $("#instagram-login-btn").click(function() {
        return Login.instagramLogin(a, b),
        !1
    }),
    $("#login-form").submit(function() {
        var c = $("#login-mail").val(),
        d = $("#login-password").val();
        return Login.emailLogin(c, d, a, b),
        !1
    })
});