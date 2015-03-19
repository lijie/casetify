function loadPhoneList() {
    $.ajax({
	type: 'GET',
	url: "/design?fn=phonelist",
	success: function(data, status, jq) {
	    $('#design_content').html(data);
	},
	dataType: 'html'
    });
}

function selectPhone(name) {
    console.log(name);

    url = "/template/panel_case.html";
    if (name == "iphone6") {
	url = "/template/panel_case.html";
    }

    $.ajax({
	type: 'GET',
	url: url,
	success: function(data, status, jq) {
	    $('#design_content').html(data);
	},
	dataType: 'html'
    });
}
