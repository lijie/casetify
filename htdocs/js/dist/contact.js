/*! casetagram 2014-11-05 */
$(function() {
    $("#email-form").submit(function() {
        var a = $("#topic").val(),
        b = $("#your_mail").val(),
        c = $("#message").val();
        if ("" == a) return showErrorMessage(__("Please enter a topic")),
        !1;
        if ("" == b || !validateEmail(b)) return showErrorMessage(__("Invalid email")),
        !1;
        if ("" == c) return showErrorMessage(__("Please enter a message")),
        !1;
        var d = $("#tag").val();
        return ("" == d || "default" == d) && (d = null),
        $(".submit-btn").addClass("disabled"),
        $.ajax({
            url: "/controllers/CustomerService.php",
            method: "post",
            data: {
                fn: "sendMail",
                title: a,
                email: b,
                message: c,
                tag: d
            },
            success: function(a) {
                var b = JSON.parse(a);
                b.success ? (showSuccessMessage(__("Message sent")), $("#topic").val(""), $("#your_mail").val(""), $("#message").val("")) : showErrorMessage(b.message),
                $(".submit-btn").removeClass("disabled")
            },
            error: function() {
                $(".submit-btn").removeClass("disabled")
            }
        }),
        !1
    }),
    $("#tag").change(function() {
        "order_tracking" == $("#tag").val() ? $(".category-message").removeClass("hide") : $(".category-message").addClass("hide")
    })
});