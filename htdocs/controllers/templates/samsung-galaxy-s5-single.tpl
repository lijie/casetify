<style>
div.design-template { border: 1px solid none; width: 338px; height: 560px; position: relative; opacity: 1; z-index: 50;
	-moz-transition-property: opacity, border; -moz-transition-duration: 0.5s;
	-webkit-transition-property: opacity, border; -webkit-transition-duration: 0.5s;
	transition-property: opacity, border; transition-duration: 0.5s; }
div.design-template > div.placeholder { position: absolute; background-color: rgba(255,255,255,0.001);; /*border: 1px solid rgba(30,30,30,0.05);*/
	-moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box; 
	-moz-transition-property: opacity, border, background; -moz-transition-duration: 0.5s;
	-webkit-transition-property: opacity, border, background; -webkit-transition-duration: 0.5s;
	transition-property: opacity, border, background; transition-duration: 0.5s;
	margin-left: -1px; margin-top: -1px }

div.design-template .single-grid { width: 338px; height: 560px; border:0;}	

div.design-template .normal-grid { width: 30px; height: 30px; position: absolute; background-color: rgba(255,255,255,0.001); border: none;}
div.design-template .grid-border-left { border-left: 1px solid rgba(30,30,30,0.05); }
div.design-template .grid-border-right { border-right: 1px solid rgba(30,30,30,0.05); }
div.design-template .grid-border-top { border-top: 1px solid rgba(30,30,30,0.05); }
div.design-template .grid-border-bottom { border-bottom: 1px solid rgba(30,30,30,0.05); }

div.design-template.over > .normal-grid { border-color: #c1beb9; }
div.design-template > .normal-grid.over { border-color: #c1beb9; }
div.design-template.over > div.placeholder { opacity: 0; border:0;}
div.design-template > div.placeholder.over { opacity: 0.0;}
div.design-template img.img-holder { opacity: 0;}
div.design-template div.img-holder { opacity: 0;}
div.design-template div.img-holder img{ filter:alpha(opacity=0) }
div.design-template > div.placeholder:hover { z-index: 50; border:0;}
div.design-template .normal-grid { opacity: 1; display: block;
	-moz-transition-property: opacity, border, background, box-shadow; -moz-transition-duration: 0.3s;
	-webkit-transition-property: opacity, border, background, box-shadow; -webkit-transition-duration: 0.3s;
	-ms-transition-property: opacity, border, background, box-shadow; -ms-transition-duration: 0.3s;
	transition-property: opacity, border, background, box-shadow; transition-duration: 0.3s;
}
div.design-template .loading-mask{width:338px; left:0px;}
</style>
<div class="design-template" data-tpl="samsung-galaxy-s3-single">
	<div class="placeholder grabbable single-grid" data-tpid="0" style="top:0px; left:0px; z-index:40"></div> <!-- top = 125 + ((240-270)/2) = 110 -->
	<div class="normal-grid grid-border-top grid-border-left grid-border-bottom grid-border-right" style="top:0; left:0; width:338px; height:560px;"></div>
</div>
