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

    $("#btn_upload").on("click", function(event) {
	console.log("btn_upload");
	$("#upload_form").removeClass("hide");
    });
}

function design_panel_init() {
    var last_panel = $("#panel-device");

    var panel_array = new Array($("#panel-photo"), $("#panel-device"), $("#panel-filter"));
    var btn_array = new Array($("#btn-select-photo"), $("#btn-select-device"), $("#btn-select-filter"));

    for (i = 0; i < panel_array.length; i++) {
	panel_array[i].hide();
    }
    last_panel.show();
    
    for (i = 0; i < panel_array.length; i++) {
	btn_array[i].on("click", null, i, function(event) {
	    console.log("i is", event.data);
	    last_panel.hide();
	    panel_array[event.data].show();
	    last_panel = panel_array[event.data];
	});
    }
}
