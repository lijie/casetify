function inactive_product() {
    $("#product_sub_nav").hide();
    $("#list_product").removeClass("active2");
}

function inactive_photo() {
    $("#photo_sub_nav").hide();
    $("#list_photo").removeClass("active2");
}

function inactive_filter() {
    $("#filter_sub_nav").hide();
    $("#list_filter").removeClass("active2");
}

function active_product() {
    $("#product_sub_nav").show();
    $("#list_product").addClass("active2");
}

function active_photo() {
    $("#photo_sub_nav").show();
    $("#list_photo").addClass("active2");
}

function active_filter() {
    $("#filter_sub_nav").show();
    $("#list_filter").addClass("active2");
}

function design_button_init() {
    $("#btn_product").on("click", function(event) {
	inactive_filter();
	inactive_photo();
	active_product();
    });

    $("#btn_photo").on("click", function(event) {
	inactive_filter();
	inactive_product();
	active_photo();
    });

    $("#btn_filter").on("click", function(event) {
	inactive_product();
	inactive_photo();
	active_filter();
    });
};
