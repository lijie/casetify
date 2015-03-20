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

    url = "/design?fn=phonecase&phone=" + name;
    $.ajax({
	type: 'GET',
	url: url,
	success: function(data, status, jq) {
	    $('#design_content').html(data);
	},
	dataType: 'html'
    });
}

function selectPhoneCase(name) {
    url = "/design?fn=edit&case=" + name;
    $.ajax({
	type: 'GET',
	url: url,
	success: function(data, status, jq) {
	    $('#design_content').html(data);
	},
	dataType: 'html'
    });
}

loadPhoneList();
