var canvas = document.getElementById('canvas')
var canvas_img = document.getElementById('canvas_img')

var context = canvas.getContext('2d')

var baseImage = new Image()
var overlayImage = new Image()
var customImage = new Image()
var maskImage = new Image()

var baseImageReady = false
var overlayImageReady = false
var customImageReady = false
var maskImageReady = false
var needDrawCustom = true

var maskImageData

baseImage.onload = function() {
    console.log("baseimage ready")
    baseImageReady = true
    drawPhone()
}

overlayImage.onload = function() {
    console.log("overlayimage ready")
    overlayImageReady = true
    drawPhone()
}

var customImageX = 0;
var customImageY = 0;
var customImageAdjustW = 0;
var customImageAdjustH = 0;
var customImageURL = "";
var customImageScale = 1;

var clearCustomParams = function() {
    customImageX = 0;
    customImageY = 0;
    customImageAdjustW = 0;
    customImageAdjustH = 0;
    customImageURL = "";
    customImageScale = 1;
}

var drawPhone = function() {
    if (baseImageReady && customImageReady && overlayImageReady && maskImageReady) {
	context.drawImage(baseImage, 0, 0)
	if (needDrawCustom) {
	    w = maskImage.width;
	    h = maskImage.height;
	    cw = customImage.width;
	    ch = customImage.height;
	    if (customImageAdjustW > 0 && customImageAdjustH > 0) {
		cw = customImageAdjustW;
		ch = customImageAdjustH;
		console.log(cw, ch);
	    }
	    
	    ratio1 = ch / cw;
	    ratio2 = h / w;
	    scale = 1.0;
	    if (ratio1 < ratio2) {
		scale = h / ch;
	    } else {
		scale = w / cw;
	    }
	    console.log(cw*scale, ch*scale, ratio1, ratio2, scale, w, cw, h, ch);
	    context.drawImage(customImage, customImageX, customImageY,
			      cw * scale, ch * scale);
	    customImageScale = scale;
	}
	context.drawImage(overlayImage, 0, 0)

	data = context.getImageData(0, 0, context.canvas.width, context.canvas.height)
	newdata = doMaskImage(data, maskImageData)
	context.putImageData(newdata, 0, 0)
	canvas_img.src = canvas.toDataURL();
    }
}

var doMaskImage = function(data, maskdata) {
    newdata = context.createImageData(canvas.width, canvas.height)
    for (i = 0; i < maskdata.data.length; i += 4) {
	if (maskdata.data[i+3] == 0) {
	    newdata.data[i] = data.data[i]
	    newdata.data[i+1] = data.data[i+1]
	    newdata.data[i+2] = data.data[i+2]
	    newdata.data[i+3] = 255
	} else {
	    newdata.data[i+3] = 0
	}
    }
    return newdata
}

var drawDesign = function(imgurl) {
    customImage.src = imgurl
}

var loadMaskData = function(maskimg) {
    maskImage.src = maskimg;
    maskImage.onload = function() {
	console.log("maskimage ready")
	maskImageReady = true
	context.drawImage(maskImage, 0, 0)
	maskImageData = context.getImageData(0, 0, context.canvas.width, context.canvas.height)
	drawPhone();
    }
}

//loadMaskData()

var drawDesign = function(baseimg, overlayimg, maskimg) {
    console.log(baseimg, overlayimg, maskimg);
    needDrawCustom = false;
    customImageReady = true;
    baseImage.src = baseimg;
    overlayImage.src = overlayimg;
    loadMaskData(maskimg)
}

var drawCustomDesign = function(customimg) {
    needDrawCustom = true;
    customImageReady = false;
    customImage.onload = function() {
	console.log("customimage ready");
	customImageReady = true;
	drawPhone();
    }
    customImage.src = customimg;
}

// file upload
/*jslint unparam: true */
/*global window, $ */
$(function () {
    'use strict';
    // Change this to the location of your server-side upload handler:
    var url = window.location.hostname === 'blueimp.github.io' ?
        '//jquery-file-upload.appspot.com/' : '/upload';
    $('#item_small_image').fileupload({
        url: url,
        dataType: 'json',
        done: function (e, data) {
	    clearCustomParams();
	    customImageURL = data.result.url
	    console.log(data.result.url)
	    $('#loader').hide();
	    drawCustomDesign(data.result.url);
	    $('#btn_edit').removeAttr("disabled");
	    $('#btn_save').removeAttr("disabled");
        },
        progressall: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .progress-bar').css(
                'width',
                progress + '%'
            );
        },
	start: function(e, data) {
	    $('#loader').show();
	}
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');
});

$(document).ready(function() {
    $('#btn_edit').on("click", function() {
	$('#custom-image').attr("src", customImageURL);
	console.log(customImage.width, customImageScale);
	$('#custom-image').attr("width", customImage.width * customImageScale);
	$('#custom-image').attr("height", customImage.height * customImageScale);
	$("#custom-image").resizable({
	    stop: function(event, ui) {
		console.log(ui);
		customImageAdjustW = ui.size.width;
		customImageAdjustH = ui.size.height;
	    }
	});
	$("#custom-image").parent().draggable();
	$('#my-modal').show();
	$('#btn_exitedit').show();
    });

    $('#btn_exitedit').on("click", function() {

	pos1 = $("#custom-image").offset();
	pos2 = $("#show_range").offset();

	console.log(pos1);
	console.log(pos2);

	customImageX = pos1.left - pos2.left;
	customImageY = pos1.top - pos2.top;
	
	$('#my-modal').hide();
	$('#btn_exitedit').hide();

	drawPhone();
    });

    $('#btn_save').on("click", function() {
	imgdata = canvas.toDataURL();
	console.log(imgdata);
	$.ajax({
	    type: 'POST',
	    url: '/save',
	    //contentType: 'multipart/form-data-',
	    data: { 'data': imgdata },
	    success: function(e, data) {
		console.log(data);
	    },
	    dataType: 'json'
	});
    });
});
