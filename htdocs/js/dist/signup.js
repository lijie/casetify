/*! casetagram 2014-11-05 */
$(function() {
    $("#facebook-login-btn").click(function() {
        return _gaq && _gaq.push(["_trackPageview", "/ga_signup"]),
        Login.facebookLogin(),
        !1
    }),
    $("#instagram-login-btn").click(function() {
        return _gaq && _gaq.push(["_trackPageview", "/ga_signup"]),
        Login.instagramLogin(),
        !1
    }),
    $("#sign-up-form").submit(function(a) {
        a.stopPropagation();
        var b = $("#sign-up-url").val(),
        c = $("#sign-up-mail").val(),
        d = $("#sign-up-password").val();
        return "" != b && isValidUsername(b) ? "" != c && validateEmail(c) ? "" == d ? (showErrorMessage(__("Invalid password")), !1) : (_gaq && _gaq.push(["_trackPageview", "/ga_signup"]), $.ajax({
            url: "/user",
            type: "POST",
            dataType: "json",
            data: {
                fn: "registerNewUser",
                "register-username": b,
                "register-email": c,
                "register-password": d,
                ajax: "Y",
                overrideSessionId: getCookie(ConstantsManager.DEFAULT_SESSION_NAME)
            },
            success: function(a) {
                a == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_USERNAME_NOT_PROVIDED ? showErrorMessage(__("Please fill in your username")) : a == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_EMAIL_NOT_PROVIDED ? showErrorMessage(__("Please fill in your email")) : a == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_PASSWORD_NOT_PROVIDED ? showErrorMessage(__("Please fill in your password")) : a == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_USERNAME_ALREADY_IN_USE ? showErrorMessage(__("Username already taken")) : a == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_INVALID_USERNAME ? showErrorMessage(__("Username contains invalid character")) : a == ConstantsManager.USER_INFO_REGISTER_NEW_USER_FAIL_EMAIL_ALREADY_IN_USE && showErrorMessage(__("Email already taken")),
                a == ConstantsManager.USER_INFO_REGISTER_NEW_USER_SUCCESS && (showSuccessMessage(__("Signup successful")), Server.redirect ? window.location.href = Server.redirect: window.location.reload())
            }
        }), !1) : (showErrorMessage(__("Invalid email")), !1) : (showErrorMessage(__("Invalid username")), !1)
    })
});