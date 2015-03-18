
design_step = new Array();
design_current = 0;

design_array = new Array(
    new Array(0, "select_phone", 1),
    new Array(1, "select_case", 2),
    new Array(2, "select_image", 3),
    new Array(3, "edit_image", 4),
    new Array(4, "preview", 5)
);

$('#btn_next').click(function(event) {
    obj = design_array[design_current];
    $('#design_content').html(obj[1]);
    design_current = obj[2];
});

function selectPhone(name) {
    console.log(name);

    url = "panel_case.html";
    if (name == "iphone6") {
	url = "panel_case.html";
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
