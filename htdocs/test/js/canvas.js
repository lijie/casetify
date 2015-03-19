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

var maskImageData

baseImage.src = '../img/template/base_iphone6_261.png'
baseImage.onload = function() {
    console.log("baseimage ready")
    baseImageReady = true
    drawPhone()
}

overlayImage.src = '../img/template/overlay_iphone6-single-261.png'
overlayImage.onload = function() {
    console.log("overlayimage ready")
    overlayImageReady = true
    drawPhone()
}

//customImage.src = 'coc_th9_1.png'
customImage.onload = function() {
    console.log("customimage ready")
    customImageReady = true
    drawPhone()
}

var drawPhone = function() {
    if (baseImageReady && customImageReady && overlayImageReady && maskImageReady) {
	context.drawImage(baseImage, 0, 0)
	context.drawImage(customImage, 0, 0)
	context.drawImage(overlayImage, 0, 0)

	data = context.getImageData(0, 0, context.canvas.width, context.canvas.height)
	newdata = doMaskImage(data, maskImageData)
	context.putImageData(newdata, 0, 0)
	canvas_img.src = canvas.toDataURL()
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

var loadMaskData = function() {
    maskImage.src = '../img/template/mask_iphone6.png'
    maskImage.onload = function() {
	console.log("maskimage ready")
	maskImageReady = true
	context.drawImage(maskImage, 0, 0)
	maskImageData = context.getImageData(0, 0, context.canvas.width, context.canvas.height)
    }
}

loadMaskData()

// ui

var raw_img_offset

$(function() {
    $("#test").resizable();
    $("#test").parent().draggable();
    $("#test").hide()
})

$("#btn_position").click(function() {
    console.log($("#canvas_img").offset());
});

$("#btn_draw").click(function() {
    drawDesign('coc_th9_1.png')
});

$("#btn_edit").click(function() {
    $("#test").show();
});

$("#btn_done").click(function() {
    $("#test").hide();
});

