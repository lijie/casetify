<style>
div.design-template { border: 1px solid none; width: 282px; height: 560px; position: relative; opacity: 1; z-index: 50;
	-moz-transition-property: opacity, border; -moz-transition-duration: 0.5s;
	-webkit-transition-property: opacity, border; -webkit-transition-duration: 0.5s;
	transition-property: opacity, border; transition-duration: 0.5s; }
div.design-template > div.placeholder { position: absolute; background-color: rgba(255,255,255,0.001);; border: 1px solid rgba(30,30,30,0.05);
	-moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box; 
	-moz-transition-property: opacity, border, background; -moz-transition-duration: 0.5s;
	-webkit-transition-property: opacity, border, background; -webkit-transition-duration: 0.5s;
	transition-property: opacity, border, background; transition-duration: 0.5s;
	margin-left: -1px; margin-top: -1px }
div.design-template .normal-grid { width: 93px; height: 107px; }
div.design-template .big-grid { width: 142px; height: 142px; }

div.design-template .biggest-grid { width: 191px; height: 212px; }

div.design-template.over > div.placeholder { border-width: 1px; border-style: solid; border-color: #c1beb9 }
div.design-template img.img-holder { opacity: 0; display: block;
	-moz-transition-property: opacity, border, background, box-shadow; -moz-transition-duration: 0.3s;
	-webkit-transition-property: opacity, border, background, box-shadow; -webkit-transition-duration: 0.3s;
	-ms-transition-property: opacity, border, background, box-shadow; -ms-transition-duration: 0.3s;
	transition-property: opacity, border, background, box-shadow; transition-duration: 0.3s;
}
div.design-template div.img-holder { opacity: 0; display: block;
	-moz-transition-property: opacity, border, background, box-shadow; -moz-transition-duration: 0.3s;
	-webkit-transition-property: opacity, border, background, box-shadow; -webkit-transition-duration: 0.3s;
	-ms-transition-property: opacity, border, background, box-shadow; -ms-transition-duration: 0.3s;
	transition-property: opacity, border, background, box-shadow; transition-duration: 0.3s;
}
div.design-template div.img-holder img{ filter:alpha(opacity=0) }

div.design-template > div.placeholder:hover { z-index: 50; }
/*div.design-template > div.placeholder:hover img.img-holder { 
	opacity: 1!important; display: block!important;
	-moz-transform: scale(1.2); -webkit-transform: scale(1.2); -ms-transform: scale(1.2); transform: scale(1.2);
	-moz-box-shadow: 0 0 2px #c68a59; -webkit-box-shadow: 0 0 2px #c68a59; -ms-box-shadow: 0 0 2px #c68a59; box-shadow: 0 0 2px #c68a59; 
}
div.design-template > div.placeholder:hover div.img-holder { 
	opacity: 1!important; display: block!important;
	-moz-transform: scale(1.2); -webkit-transform: scale(1.2); -ms-transform: scale(1.2); transform: scale(1.2);
	-moz-box-shadow: 0 0 2px #c68a59; -webkit-box-shadow: 0 0 2px #c68a59; -ms-box-shadow: 0 0 2px #c68a59; box-shadow: 0 0 2px #c68a59; 
}*/
</style>
<div class="design-template" data-tpl="iphone5s-rand">
	
	<div class="placeholder grabbable biggest-grid" data-tpid="0" style="top:0px; left:0px"></div>
	
	<div class="placeholder grabbable normal-grid" data-tpid="1" style="top:0px; left:189px"></div>
	<div class="placeholder grabbable normal-grid" data-tpid="2" style="top:105px; left:189px"></div>

	<div class="placeholder grabbable big-grid" data-tpid="3" style="top:210px; left:0px"></div>
	<div class="placeholder grabbable big-grid" data-tpid="4" style="top:210px; left:140px"></div>
	

	<div class="placeholder grabbable normal-grid" data-tpid="5" style="top:350px; left:0px"></div>
	<div class="placeholder grabbable normal-grid" data-tpid="6" style="top:455px; left:0px"></div>
    <div class="placeholder grabbable biggest-grid" data-tpid="7" style="top:350px; left:91px"></div>
</div>
