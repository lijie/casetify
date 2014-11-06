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
//    var last_panel = $("#panel-device");
//    var last_panel_fake = $("#panel-device-fake");
//
//    var panel_array = new Array($("#panel-photo"), $("#panel-device"), $("#panel-filter"));
//    var panel_fake_array = new Array($("#panel-photo-fake"), $("#panel-device-fake"), $("#panel-filter-fake"));
//    var btn_array = new Array($("#btn-select-photo"), $("#btn-select-device"), $("#btn-select-filter"));
//
//    for (i = 0; i < panel_array.length; i++) {
//	panel_fake_array[i].show();
//	panel_array[i].hide();
//    }
//    last_panel.show();
//    last_panel_fake.hide();
//    
//    for (i = 0; i < panel_array.length; i++) {
//	btn_array[i].on("click", function(event) {
//	    console.log("i is", i);
//	    last_panel.hide();
//	    last_panel_fake.show();
//	    panel_array[i].show();
//	    panel_array_fake[i].hide();
//	    last_panel = panel_array[i];
//	    last_panel_fake = panel_fake_array[i];
//	});
//    }
}
