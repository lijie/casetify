/*! casetagram 2014-11-05 */
$(function() {
    $("#forgot-password-form").submit(function() {
        var a = $("#reset-mail").val();
        return "" != a && validateEmail(a) ? ($.ajax({
            type: "post",
            url: ConstantsManager.CASETAGRAM_DOCUMENT_ROOT_PATH + "user",
            data: {
                fn: "resetPassword",
                ajax: "Y",
                email: a
            },
            success: function(a) {
                if (void 0 == a) return ! 1;
                switch (a = parseInt(a)) {
                case ConstantsManager.USER_INFO_RESET_PASSWORD_REQUEST_SUCCESS:
                    showSuccessMessage(__("Reset password email sent")),
                    $("#reset-mail").val("");
                    break;
                case ConstantsManager.USER_INFO_RESET_PASSWORD_EMAIL_NOT_REGISTERED:
                    showErrorMessage(__("Email not registered"));
                    break;
                case ConstantsManager.USER_INFO_RESET_PASSWORD_SEND_EMAIL_FAILURE:
                    showErrorMessage(__("Cannot send reset password email"));
                    break;
                case ConstantsManager.USER_INFO_RESET_PASSWORD_UNABLE_TO_SAVE_REQUEST:
                case ConstantsManager.USER_INFO_RESET_PASSWORD_UNABLE_TO_CLEANUP_OLD_REQUEST:
                case ConstantsManager.USER_INFO_RESET_PASSWORD_INSUFFICIENT_DATA:
                    showErrorMessage(__("Reset password request failed"))
                }
            }
        }), !1) : (showErrorMessage("Invalid email"), !1)
    })
});