(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ui_atlas_1", frames: [[0,0,1920,1080],[0,1082,1296,758]]},
		{name:"ui_atlas_2", frames: [[0,0,1284,724],[0,726,858,848],[860,726,834,834]]},
		{name:"ui_atlas_3", frames: [[0,607,467,373],[469,607,243,245],[723,1203,179,169],[928,929,412,237],[1280,1190,257,205],[1803,885,203,154],[1539,1190,261,184],[1386,885,415,303],[1803,1041,193,160],[928,1168,350,168],[459,1203,262,126],[832,0,1129,395],[0,0,830,605],[469,929,457,272],[0,982,457,272],[1386,397,491,486],[832,397,552,530]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_169 = function() {
	this.initialize(img.CachedBmp_169);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2393,218);


(lib.Activitycompletedimg = function() {
	this.initialize(ss["ui_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.BlueBG_img = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.rotation_img = function() {
	this.initialize(ss["ui_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shine_main2 = function() {
	this.initialize(ss["ui_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Start_Btn_img = function() {
	this.initialize(ss["ui_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Turttle_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-246,-263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Turttle_Anim, new cjs.Rectangle(-246,-263,491,486), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_169();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1196.5,109), null);


(lib.shine_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shine_main2();
	this.instance.setTransform(-416.9,-416.9,0.9998,0.9998);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shine_03, new cjs.Rectangle(-416.9,-416.9,833.9,833.9), null);


(lib.root_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.root_bg, new cjs.Rectangle(0,0,1280,720), null);


(lib.RAYS1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.rotation_img();
	this.instance.setTransform(-429,-424);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-429,-424,858,848);


(lib.Q3_Fish3_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-102,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Q3_Fish3_Anim, new cjs.Rectangle(-102,-78,203,154), null);


(lib.Q3_Fish2_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(-100,-123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Q3_Fish2_Anim, new cjs.Rectangle(-100,-123,257,205), null);


(lib.Q3_Fish1_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(-206,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Q3_Fish1_Anim, new cjs.Rectangle(-206,-118,412,237), null);


(lib.Q2_Fish2_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(-122,-123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Q2_Fish2_Anim, new cjs.Rectangle(-122,-123,243,245), null);


(lib.Q2_Fish1_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap11();
	this.instance.setTransform(-81,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Q2_Fish1_Anim, new cjs.Rectangle(-81,-90,179,169), null);


(lib.mcTxt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(126,162,163,0.008)").s().p("AhFBVIAAipICLAAIAACpg");
	this.shape.setTransform(7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcTxt, new cjs.Rectangle(0,0,14,17), null);


(lib.Fish11_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-85,-67,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fish11_Anim, new cjs.Rectangle(-85,-67,168.1,134.3), null);


(lib.Fish10_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-133,-92,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fish10_Anim, new cjs.Rectangle(-133,-92,298.8,217.8), null);


(lib.Fish7_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap21();
	this.instance.setTransform(-80,-44,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fish7_Anim, new cjs.Rectangle(-80,-44,212.2,102.1), null);


(lib.Fish6_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap20();
	this.instance.setTransform(-183,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fish6_Anim, new cjs.Rectangle(-183,-132,350,168), null);


(lib.Fish5_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap18();
	this.instance.setTransform(-235,-157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fish5_Anim, new cjs.Rectangle(-235,-157,415,303), null);


(lib.Fish4_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap15();
	this.instance.setTransform(-131,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fish4_Anim, new cjs.Rectangle(-131,-79,261,184), null);


(lib.Fish3_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-98,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fish3_Anim, new cjs.Rectangle(-98,-86,203,154), null);


(lib.Fish2_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap19();
	this.instance.setTransform(-84,-61,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fish2_Anim, new cjs.Rectangle(-84,-61,156.4,129.6), null);


(lib.Fish1_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(-112,-110,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Fish1_Anim, new cjs.Rectangle(-112,-110,231.3,184.5), null);


(lib.btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-640,-360,1280,720), null);


(lib.blue_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BlueBG_img();
	this.instance.setTransform(-648,-379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-648,-379,1296,758);


(lib.Activity_Completed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Activitycompletedimg();
	this.instance.setTransform(-640,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Activity_Completed, new cjs.Rectangle(-640,-360,1284,724), null);


(lib.Turttle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Turttle_Anim();
	this.instance.setTransform(5.2,15.8,1,1,0,0,0,5.2,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-3.7},59).to({y:15.8},61).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246,-282.5,491,505.5);


(lib.StartAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Start_Btn_img();
	this.instance.setTransform(337,78);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(640.1,517.8,0.7679,0.7679,0,0,0,598.4,59.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.bg = new lib.root_bg();
	this.bg.name = "bg";
	this.bg.cache(-2,-2,1284,724);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StartAnim, new cjs.Rectangle(0,0,1280,720), null);


(lib.shine_mov = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.RAYS1("synched",0);
	this.instance.setTransform(0,0,1.0936,1.0936);
	this.instance.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},549).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-659.6,-659.6,1319.2,1319.3000000000002);


(lib.shine_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shine_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-416.9,-416.9,833.9,833.9);


(lib.shine_01B = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shine_02("synched",0);
	this.instance.setTransform(0,0,1,1,27.1914);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-630},1064).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-589.6,-589.6,1179.3000000000002,1179.3000000000002);


(lib.shine_01A = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shine_mov();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-469.1,-463.7,938.3,927.4);


(lib.screen_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.blue_bg("synched",0);
	this.instance.alpha = 0.8516;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-648,-379,1296,758);


(lib.Q3_Fish3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Q3_Fish3_Anim();
	this.instance.setTransform(1.1,1.1,1,1,0,0,0,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:20.6},59).to({y:1.1},69).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-78,203,173.5);


(lib.Q3_Fish2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Q3_Fish2_Anim();
	this.instance.setTransform(6.7,-3.9,1,1,0,0,0,6.7,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:15.6},57).to({y:-3.9},58).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-123,257,224.5);


(lib.Q3_Fish1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Q3_Fish1_Anim();
	this.instance.setTransform(5.2,15.8,1,1,0,0,0,5.2,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-3.7},59).to({y:15.8},61).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206,-137.5,412,256.5);


(lib.Q2_Fish2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Q2_Fish2_Anim();
	this.instance.setTransform(3.5,-1.1,1,1,0,0,0,3.5,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:18.4},45).to({y:-1.1},54).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-123,243,264.5);


(lib.Q2_Fish1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Q2_Fish1_Anim();
	this.instance.setTransform(5.2,15.8,1,1,0,0,0,5.2,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-3.7},59).to({y:15.8},61).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-109.5,179,188.5);


(lib.mcRubric_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(-2.8,80.45);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap23();
	this.instance.setTransform(-564,-197);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcRubric_Anim, new cjs.Rectangle(-564,-197,1129,395), null);


(lib.mcRubric = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(1));

	// Layer_1
	this.mcRubricAnim = new lib.mcRubric_Anim();
	this.mcRubricAnim.name = "mcRubricAnim";
	this.mcRubricAnim.setTransform(0,225.95);
	this.mcRubricAnim.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcRubricAnim).to({y:-172,alpha:1},1,cjs.Ease.get(1)).to({y:0},24,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-564,-369,1129,793);


(lib.Fish11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Fish11_Anim();
	this.instance.setTransform(6.7,-3.9,1,1,0,0,0,6.7,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:15.6},57).to({y:-3.9},58).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-67,168.1,153.8);


(lib.Fish10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Fish10_Anim();
	this.instance.setTransform(6.7,-3.9,1,1,0,0,0,6.7,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:15.6},57).to({y:-3.9},58).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-92,298.8,237.3);


(lib.Fish7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Fish7_Anim();
	this.instance.setTransform(6.7,-3.9,1,1,0,0,0,6.7,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:15.6},57).to({y:-3.9},58).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-44,212.2,121.6);


(lib.Fish6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Fish6_Anim();
	this.instance.setTransform(3.5,-1.1,1,1,0,0,0,3.5,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:18.4},45).to({y:-1.1},54).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183,-132,350,187.5);


(lib.Fish5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Fish5_Anim();
	this.instance.setTransform(26.5,5.7,1,1,0,0,0,26.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-13.8},80).to({y:5.7},84).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235,-176.5,415,322.5);


(lib.Fish4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Fish4_Anim();
	this.instance.setTransform(3.5,-1.1,1,1,0,0,0,3.5,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:18.4},45).to({y:-1.1},54).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-79,261,203.5);


(lib.Fish3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Fish3_Anim();
	this.instance.setTransform(1.1,1.1,1,1,0,0,0,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:20.6},59).to({y:1.1},69).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-86,203,173.5);


(lib.Fish2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Fish2_Anim();
	this.instance.setTransform(6.7,-3.9,1,1,0,0,0,6.7,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:15.6},57).to({y:-3.9},58).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-61,156.4,149.1);


(lib.Fish1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Fish1_Anim();
	this.instance.setTransform(5.2,15.8,1,1,0,0,0,5.2,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-3.7},59).to({y:15.8},61).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-129.5,231.3,204);


(lib.end_screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_101 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(101).call(this.frame_101).wait(1));

	// Isolation_Mode
	this.instance = new lib.Activity_Completed();
	this.instance.setTransform(954.2,545,0.75,0.75);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({scaleX:1.6537,scaleY:1.6537,alpha:1},15,cjs.Ease.get(1)).to({scaleX:1.5,scaleY:1.5},9).wait(55));

	// Layer_24
	this.instance_1 = new lib.shine_01B();
	this.instance_1.setTransform(963.5,452,0.5805,0.5805);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({scaleX:1.5,scaleY:1.5,alpha:0.8008},26,cjs.Ease.get(1)).wait(48));

	// shine1
	this.instance_2 = new lib.shine_01A("synched",0);
	this.instance_2.setTransform(943.6,423.55,1.5,1.5,19.9988);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({rotation:0,alpha:1},30).wait(68));

	// Layer_27
	this.instance_3 = new lib.screen_bg("synched",0);
	this.instance_3.setTransform(951.85,546.2,1.5,1.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},30).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.1,-470.7,2123.3,1788.6000000000001);


(lib.button1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(0.05,-11.5,0.3568,0.363,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(2));

	// Layer_1
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(-2.8,-5.05);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(2));

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-227,-136);

	this.instance_1 = new lib.Bitmap6();
	this.instance_1.setTransform(-227,-136);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.3,-142.1,458.3,278.1);


(lib.start_screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.stop();
		this.parent.fStartGamneAnim();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(1));

	// btn
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(621.85,279.45,0.2292,0.3989,0,0,0,0,1.4);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(41));

	// Layer_1
	this.instance = new lib.StartAnim();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.0117},29).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.question10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {NextQes:53};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}
	this.frame_98 = function() {
		this.stop();
		this.parent.fChangeQuestion();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(45).call(this.frame_98).wait(1));

	// mcOption3
	this.mcOption3 = new lib.button1();
	this.mcOption3.name = "mcOption3";
	this.mcOption3.setTransform(1556.05,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption3.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption3).wait(19).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(9).to({x:2830.25},34,cjs.Ease.get(1)).wait(10));

	// mcOption2
	this.mcOption2 = new lib.button1();
	this.mcOption2.name = "mcOption2";
	this.mcOption2.setTransform(994.75,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption2.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption2).wait(9).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(23).to({x:2480.55},34,cjs.Ease.get(1)).wait(6));

	// mcOption1
	this.mcOption1 = new lib.button1();
	this.mcOption1.name = "mcOption1";
	this.mcOption1.setTransform(433.4,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption1).wait(1).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(34).to({x:2165.2},34,cjs.Ease.get(1)).wait(3));

	// Fish1
	this.instance = new lib.Q2_Fish1();
	this.instance.setTransform(2033.45,622.4,1,1,0,0,0,5.2,15.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:224.85},34,cjs.Ease.get(1)).wait(18).to({x:-239.35},34,cjs.Ease.get(1)).wait(5));

	// Fish4
	this.instance_1 = new lib.Q2_Fish2();
	this.instance_1.setTransform(2596.7,327.9,0.8,0.8,0,0,0,3.5,-1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:1636.7},34,cjs.Ease.get(1)).wait(18).to({x:-125.3},34,cjs.Ease.get(1)).wait(10));

	// Fish2
	this.instance_2 = new lib.Fish7();
	this.instance_2.setTransform(2932.75,569.95,1,1,0,0,0,6.7,-3.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({x:1713.75,y:672.45},34,cjs.Ease.get(1)).wait(11).to({x:1693.25},0).to({x:-233.75,y:569.95},34,cjs.Ease.get(1)).wait(8));

	// Fish1
	this.instance_3 = new lib.Q3_Fish1();
	this.instance_3.setTransform(1973.7,346.45,1,1,0,0,0,5.2,15.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({x:371.7},34,cjs.Ease.get(1)).wait(15).to({x:-668.3},34,cjs.Ease.get(1)).wait(8));

	// Fish4
	this.instance_4 = new lib.Fish6();
	this.instance_4.setTransform(2223.7,722.75,1,1,0,0,0,3.5,-1.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({x:601.2},34,cjs.Ease.get(1)).wait(18).to({x:-647.8},34,cjs.Ease.get(1)).wait(10));

	// Fish2
	this.instance_5 = new lib.Fish10();
	this.instance_5.setTransform(2181.45,295.5,1,1,0,0,0,6.7,-3.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).to({x:784.45,y:377.5},34,cjs.Ease.get(1)).wait(14).to({x:-537.05,y:295.5},34,cjs.Ease.get(1)).wait(10));

	// Fish2_copy
	this.instance_6 = new lib.Fish11();
	this.instance_6.setTransform(2382.8,504.95,1,1,0,0,0,6.7,-3.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({x:1489.1,y:531},34,cjs.Ease.get(1)).wait(11).to({x:-103.85,y:449},34,cjs.Ease.get(1)).wait(11));

	// Fish2
	this.instance_7 = new lib.Fish2();
	this.instance_7.setTransform(2382.8,504.95,1,1,0,0,0,6.7,-3.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).to({x:985.8,y:586.95},34,cjs.Ease.get(1)).wait(11).to({x:-335.7,y:504.95},34,cjs.Ease.get(1)).wait(8));

	// Fish3
	this.instance_8 = new lib.Fish3();
	this.instance_8.setTransform(2647,315.5,1,1,0,0,0,1.1,1.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({x:1209,y:377},34,cjs.Ease.get(1)).wait(16).to({x:-199,y:315.5},34,cjs.Ease.get(1)).wait(9));

	// Fish5
	this.instance_9 = new lib.Fish4();
	this.instance_9.setTransform(2832.95,721.65,1,1,0,0,0,26.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:1312.95},34,cjs.Ease.get(1)).wait(21).to({x:-140.55},34,cjs.Ease.get(1)).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-879.5,207.4,3941.8,1168.1);


(lib.question9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"NextQes":53};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}
	this.frame_98 = function() {
		this.stop();
		this.parent.fChangeQuestion();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(45).call(this.frame_98).wait(1));

	// mcOption3
	this.mcOption3 = new lib.button1();
	this.mcOption3.name = "mcOption3";
	this.mcOption3.setTransform(1556.05,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption3.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption3).wait(19).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(9).to({x:2830.25},34,cjs.Ease.get(1)).wait(10));

	// mcOption2
	this.mcOption2 = new lib.button1();
	this.mcOption2.name = "mcOption2";
	this.mcOption2.setTransform(994.75,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption2.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption2).wait(9).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(23).to({x:2480.55},34,cjs.Ease.get(1)).wait(6));

	// mcOption1
	this.mcOption1 = new lib.button1();
	this.mcOption1.name = "mcOption1";
	this.mcOption1.setTransform(433.4,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption1).wait(1).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(34).to({x:2165.2},34,cjs.Ease.get(1)).wait(3));

	// Fish1
	this.instance = new lib.Q2_Fish1();
	this.instance.setTransform(2033.45,622.4,1,1,0,0,0,5.2,15.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:224.85},34,cjs.Ease.get(1)).wait(18).to({x:-239.35},34,cjs.Ease.get(1)).wait(5));

	// Fish4
	this.instance_1 = new lib.Q2_Fish2();
	this.instance_1.setTransform(2596.7,327.9,0.8,0.8,0,0,0,3.5,-1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:1636.7},34,cjs.Ease.get(1)).wait(18).to({x:-125.3},34,cjs.Ease.get(1)).wait(10));

	// Fish2
	this.instance_2 = new lib.Fish7();
	this.instance_2.setTransform(2840.2,487.95,1,1,0,0,0,6.7,-3.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({x:1621.2,y:590.45},34,cjs.Ease.get(1)).wait(11).to({x:1600.7},0).to({x:-326.3,y:487.95},34,cjs.Ease.get(1)).wait(8));

	// Fish1
	this.instance_3 = new lib.Q3_Fish1();
	this.instance_3.setTransform(1973.7,346.45,1,1,0,0,0,5.2,15.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({x:371.7},34,cjs.Ease.get(1)).wait(15).to({x:-668.3},34,cjs.Ease.get(1)).wait(8));

	// Fish4
	this.instance_4 = new lib.Fish6();
	this.instance_4.setTransform(2223.7,722.75,1,1,0,0,0,3.5,-1.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({x:601.2},34,cjs.Ease.get(1)).wait(18).to({x:-647.8},34,cjs.Ease.get(1)).wait(10));

	// Fish2
	this.instance_5 = new lib.Fish10();
	this.instance_5.setTransform(2181.45,295.5,1,1,0,0,0,6.7,-3.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).to({x:784.45,y:377.5},34,cjs.Ease.get(1)).wait(13).to({x:-537.05,y:295.5},34,cjs.Ease.get(1)).wait(11));

	// Fish2
	this.instance_6 = new lib.Fish2();
	this.instance_6.setTransform(2382.8,504.95,1,1,0,0,0,6.7,-3.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({x:985.8,y:586.95},34,cjs.Ease.get(1)).wait(11).to({x:-335.7,y:504.95},34,cjs.Ease.get(1)).wait(8));

	// Fish3
	this.instance_7 = new lib.Fish3();
	this.instance_7.setTransform(2647,315.5,1,1,0,0,0,1.1,1.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({x:1209,y:377},34,cjs.Ease.get(1)).wait(16).to({x:-199,y:315.5},34,cjs.Ease.get(1)).wait(9));

	// Fish5
	this.instance_8 = new lib.Fish4();
	this.instance_8.setTransform(2832.95,721.65,1,1,0,0,0,26.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:1312.95},34,cjs.Ease.get(1)).wait(21).to({x:-140.55},34,cjs.Ease.get(1)).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-879.5,207.4,3941.8,1168.1);


(lib.question8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"NextQes":53};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}
	this.frame_98 = function() {
		this.stop();
		this.parent.fChangeQuestion();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(45).call(this.frame_98).wait(1));

	// mcOption3
	this.mcOption3 = new lib.button1();
	this.mcOption3.name = "mcOption3";
	this.mcOption3.setTransform(1556.05,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption3.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption3).wait(19).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(9).to({x:2830.25},34,cjs.Ease.get(1)).wait(10));

	// mcOption2
	this.mcOption2 = new lib.button1();
	this.mcOption2.name = "mcOption2";
	this.mcOption2.setTransform(994.75,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption2.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption2).wait(9).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(23).to({x:2480.55},34,cjs.Ease.get(1)).wait(6));

	// mcOption1
	this.mcOption1 = new lib.button1();
	this.mcOption1.name = "mcOption1";
	this.mcOption1.setTransform(433.4,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption1).wait(1).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(34).to({x:2165.2},34,cjs.Ease.get(1)).wait(3));

	// Fish1
	this.instance = new lib.Q2_Fish1();
	this.instance.setTransform(2033.45,622.4,1,1,0,0,0,5.2,15.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:224.85},34,cjs.Ease.get(1)).wait(18).to({x:-239.35},34,cjs.Ease.get(1)).wait(5));

	// Fish4
	this.instance_1 = new lib.Q2_Fish2();
	this.instance_1.setTransform(2596.7,327.9,0.8,0.8,0,0,0,3.5,-1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:1636.7},34,cjs.Ease.get(1)).wait(18).to({x:-125.3},34,cjs.Ease.get(1)).wait(10));

	// Fish2
	this.instance_2 = new lib.Fish7();
	this.instance_2.setTransform(2840.2,487.95,1,1,0,0,0,6.7,-3.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({x:1416.2},34,cjs.Ease.get(1)).wait(11).to({x:-326.3},34,cjs.Ease.get(1)).wait(8));

	// Fish1
	this.instance_3 = new lib.Q3_Fish1();
	this.instance_3.setTransform(1973.7,346.45,1,1,0,0,0,5.2,15.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({x:453.7},34,cjs.Ease.get(1)).wait(15).to({x:-668.3},34,cjs.Ease.get(1)).wait(8));

	// Fish4
	this.instance_4 = new lib.Fish6();
	this.instance_4.setTransform(2223.7,722.75,1,1,0,0,0,3.5,-1.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({x:703.7},34,cjs.Ease.get(1)).wait(18).to({x:-647.8},34,cjs.Ease.get(1)).wait(10));

	// Fish2
	this.instance_5 = new lib.Fish2();
	this.instance_5.setTransform(2360.2,455.95,1,1,0,0,0,6.7,-3.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({x:840.2},34,cjs.Ease.get(1)).wait(11).to({x:-358.3},34,cjs.Ease.get(1)).wait(8));

	// Fish3
	this.instance_6 = new lib.Fish3();
	this.instance_6.setTransform(2647,315.5,1,1,0,0,0,1.1,1.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({x:1127},34,cjs.Ease.get(1)).wait(16).to({x:-199},34,cjs.Ease.get(1)).wait(9));

	// Fish5
	this.instance_7 = new lib.Fish4();
	this.instance_7.setTransform(2832.95,721.65,1,1,0,0,0,26.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:1312.95},34,cjs.Ease.get(1)).wait(21).to({x:-140.55},34,cjs.Ease.get(1)).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-879.5,212.7,3941.8,1162.8);


(lib.question7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"NextQes":53};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}
	this.frame_98 = function() {
		this.stop();
		this.parent.fChangeQuestion();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(45).call(this.frame_98).wait(1));

	// mcOption3
	this.mcOption3 = new lib.button1();
	this.mcOption3.name = "mcOption3";
	this.mcOption3.setTransform(1556.05,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption3.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption3).wait(19).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(9).to({x:2830.25},34,cjs.Ease.get(1)).wait(10));

	// mcOption2
	this.mcOption2 = new lib.button1();
	this.mcOption2.name = "mcOption2";
	this.mcOption2.setTransform(994.75,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption2.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption2).wait(9).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(23).to({x:2480.55},34,cjs.Ease.get(1)).wait(6));

	// mcOption1
	this.mcOption1 = new lib.button1();
	this.mcOption1.name = "mcOption1";
	this.mcOption1.setTransform(433.4,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption1).wait(1).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(34).to({x:2165.2},34,cjs.Ease.get(1)).wait(3));

	// Fish1
	this.instance = new lib.Q2_Fish1();
	this.instance.setTransform(2033.45,622.4,1,1,0,0,0,5.2,15.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:224.85},34,cjs.Ease.get(1)).wait(18).to({x:-239.35},34,cjs.Ease.get(1)).wait(5));

	// Fish4
	this.instance_1 = new lib.Q2_Fish2();
	this.instance_1.setTransform(3185.8,423.75,1,1,0,0,0,3.5,-1.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:1665.8},34,cjs.Ease.get(1)).wait(18).to({x:-136.75},34,cjs.Ease.get(1)).wait(10));

	// Fish1
	this.instance_2 = new lib.Q3_Fish1();
	this.instance_2.setTransform(1973.7,346.45,1,1,0,0,0,5.2,15.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({x:453.7},34,cjs.Ease.get(1)).wait(15).to({x:-668.3},34,cjs.Ease.get(1)).wait(8));

	// Fish4
	this.instance_3 = new lib.Fish6();
	this.instance_3.setTransform(2223.7,722.75,1,1,0,0,0,3.5,-1.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({x:703.7},34,cjs.Ease.get(1)).wait(18).to({x:-647.8},34,cjs.Ease.get(1)).wait(10));

	// Fish2
	this.instance_4 = new lib.Fish2();
	this.instance_4.setTransform(2360.2,455.95,1,1,0,0,0,6.7,-3.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({x:840.2},34,cjs.Ease.get(1)).wait(11).to({x:-358.3},34,cjs.Ease.get(1)).wait(8));

	// Fish3
	this.instance_5 = new lib.Fish3();
	this.instance_5.setTransform(2647,315.5,1,1,0,0,0,1.1,1.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({x:1127},34,cjs.Ease.get(1)).wait(16).to({x:-199},34,cjs.Ease.get(1)).wait(9));

	// Fish5
	this.instance_6 = new lib.Fish5();
	this.instance_6.setTransform(2832.95,689.65,1,1,0,0,0,26.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:1312.95},34,cjs.Ease.get(1)).wait(21).to({x:-204.55},34,cjs.Ease.get(1)).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-879.5,212.7,4182.8,1162.8);


(lib.question6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"NextQes":53};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}
	this.frame_98 = function() {
		this.stop();
		this.parent.fChangeQuestion();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(45).call(this.frame_98).wait(1));

	// mcOption3
	this.mcOption3 = new lib.button1();
	this.mcOption3.name = "mcOption3";
	this.mcOption3.setTransform(1556.05,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption3.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption3).wait(19).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(9).to({x:2830.25},34,cjs.Ease.get(1)).wait(10));

	// mcOption2
	this.mcOption2 = new lib.button1();
	this.mcOption2.name = "mcOption2";
	this.mcOption2.setTransform(994.75,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption2.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption2).wait(9).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(23).to({x:2480.55},34,cjs.Ease.get(1)).wait(6));

	// mcOption1
	this.mcOption1 = new lib.button1();
	this.mcOption1.name = "mcOption1";
	this.mcOption1.setTransform(433.4,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption1).wait(1).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(34).to({x:2165.2},34,cjs.Ease.get(1)).wait(3));

	// Fish4
	this.instance = new lib.Q2_Fish2();
	this.instance.setTransform(3025.3,423.75,1,1,0,0,0,3.5,-1.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({x:1505.3},34,cjs.Ease.get(1)).wait(18).to({x:-297.25},34,cjs.Ease.get(1)).wait(10));

	// Fish1
	this.instance_1 = new lib.Fish1();
	this.instance_1.setTransform(2046.85,426.65,1,1,0,0,0,5.2,15.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({x:526.85},34,cjs.Ease.get(1)).wait(15).to({x:-595.15},34,cjs.Ease.get(1)).wait(8));

	// Fish4
	this.instance_2 = new lib.Fish4();
	this.instance_2.setTransform(2223.7,671.4,1,1,0,0,0,3.5,-1.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({x:703.7},34,cjs.Ease.get(1)).wait(18).to({x:-647.8},34,cjs.Ease.get(1)).wait(10));

	// Fish2
	this.instance_3 = new lib.Fish2();
	this.instance_3.setTransform(2360.2,414.25,1,1,0,0,0,6.7,-3.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({x:840.2},34,cjs.Ease.get(1)).wait(11).to({x:-358.3},34,cjs.Ease.get(1)).wait(8));

	// Fish3
	this.instance_4 = new lib.Fish3();
	this.instance_4.setTransform(2647,350.8,1,1,0,0,0,1.1,1.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({x:1127},34,cjs.Ease.get(1)).wait(16).to({x:-199},34,cjs.Ease.get(1)).wait(9));

	// Fish5
	this.instance_5 = new lib.Fish5();
	this.instance_5.setTransform(2691.75,641.5,1,1,0,0,0,26.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:1171.75},34,cjs.Ease.get(1)).wait(21).to({x:-281.75},34,cjs.Ease.get(1)).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-782.3,263.7,3925.1000000000004,1111.8);


(lib.question5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"NextQes":53};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}
	this.frame_98 = function() {
		this.stop();
		this.parent.fChangeQuestion();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(45).call(this.frame_98).wait(1));

	// mcOption3
	this.mcOption3 = new lib.button1();
	this.mcOption3.name = "mcOption3";
	this.mcOption3.setTransform(1556.05,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption3.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption3).wait(19).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(9).to({x:2830.25},34,cjs.Ease.get(1)).wait(10));

	// mcOption2
	this.mcOption2 = new lib.button1();
	this.mcOption2.name = "mcOption2";
	this.mcOption2.setTransform(994.75,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption2.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption2).wait(9).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(23).to({x:2480.55},34,cjs.Ease.get(1)).wait(6));

	// mcOption1
	this.mcOption1 = new lib.button1();
	this.mcOption1.name = "mcOption1";
	this.mcOption1.setTransform(433.4,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption1).wait(1).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(34).to({x:2165.2},34,cjs.Ease.get(1)).wait(3));

	// Fish1
	this.instance = new lib.Fish1();
	this.instance.setTransform(2078.85,426.65,1,1,0,0,0,5.2,15.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:590.85},34,cjs.Ease.get(1)).wait(15).to({x:-531.15},34,cjs.Ease.get(1)).wait(8));

	// Fish4
	this.instance_1 = new lib.Fish4();
	this.instance_1.setTransform(2255.7,671.4,1,1,0,0,0,3.5,-1.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:767.7},34,cjs.Ease.get(1)).wait(18).to({x:-583.8},34,cjs.Ease.get(1)).wait(10));

	// Fish2
	this.instance_2 = new lib.Fish2();
	this.instance_2.setTransform(2392.2,414.25,1,1,0,0,0,6.7,-3.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({x:904.2},34,cjs.Ease.get(1)).wait(11).to({x:-294.3},34,cjs.Ease.get(1)).wait(8));

	// Fish3
	this.instance_3 = new lib.Fish3();
	this.instance_3.setTransform(2679,350.8,1,1,0,0,0,1.1,1.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({x:1191},34,cjs.Ease.get(1)).wait(16).to({x:-135},34,cjs.Ease.get(1)).wait(9));

	// Fish5
	this.instance_4 = new lib.Fish5();
	this.instance_4.setTransform(2723.75,641.5,1,1,0,0,0,26.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:1235.75},34,cjs.Ease.get(1)).wait(21).to({x:-217.75},34,cjs.Ease.get(1)).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-718.3,263.7,3780.6000000000004,1111.8);


(lib.question4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"NextQes":53};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}
	this.frame_98 = function() {
		this.stop();
		this.parent.fChangeQuestion();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(45).call(this.frame_98).wait(1));

	// mcOption3
	this.mcOption3 = new lib.button1();
	this.mcOption3.name = "mcOption3";
	this.mcOption3.setTransform(1556.05,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption3.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption3).wait(19).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(9).to({x:2830.25},34,cjs.Ease.get(1)).wait(10));

	// mcOption2
	this.mcOption2 = new lib.button1();
	this.mcOption2.name = "mcOption2";
	this.mcOption2.setTransform(994.75,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption2.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption2).wait(9).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(23).to({x:2480.55},34,cjs.Ease.get(1)).wait(6));

	// mcOption1
	this.mcOption1 = new lib.button1();
	this.mcOption1.name = "mcOption1";
	this.mcOption1.setTransform(433.4,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption1).wait(1).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(34).to({x:2165.2},34,cjs.Ease.get(1)).wait(3));

	// Fish1
	this.instance = new lib.Fish1();
	this.instance.setTransform(2078.85,426.65,1,1,0,0,0,5.2,15.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:590.85},34,cjs.Ease.get(1)).wait(14).to({x:-536.65},34,cjs.Ease.get(1)).wait(9));

	// Fish4
	this.instance_1 = new lib.Fish4();
	this.instance_1.setTransform(2255.7,671.4,1,1,0,0,0,3.5,-1.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:767.7},34,cjs.Ease.get(1)).wait(21).to({x:-655.1},34,cjs.Ease.get(1)).wait(7));

	// Fish3
	this.instance_2 = new lib.Fish3();
	this.instance_2.setTransform(2679,350.8,1,1,0,0,0,1.1,1.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:1191},34,cjs.Ease.get(1)).wait(16).to({x:-244},34,cjs.Ease.get(1)).wait(9));

	// Fish5
	this.instance_3 = new lib.Fish5();
	this.instance_3.setTransform(2723.75,641.5,1,1,0,0,0,26.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:1235.75},34,cjs.Ease.get(1)).wait(21).to({x:-199.25},34,cjs.Ease.get(1)).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-789.6,263.7,3851.9,1111.8);


(lib.question3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"NextQes":53};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}
	this.frame_98 = function() {
		this.stop();
		this.parent.fChangeQuestion();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(45).call(this.frame_98).wait(1));

	// mcOption3
	this.mcOption3 = new lib.button1();
	this.mcOption3.name = "mcOption3";
	this.mcOption3.setTransform(1556.05,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption3.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption3).wait(19).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(9).to({x:2830.25},34,cjs.Ease.get(1)).to({_off:true},9).wait(1));

	// mcOption2
	this.mcOption2 = new lib.button1();
	this.mcOption2.name = "mcOption2";
	this.mcOption2.setTransform(994.75,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption2.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption2).wait(9).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(23).to({x:2480.55},34,cjs.Ease.get(1)).to({_off:true},5).wait(1));

	// mcOption1
	this.mcOption1 = new lib.button1();
	this.mcOption1.name = "mcOption1";
	this.mcOption1.setTransform(433.4,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption1).wait(1).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(34).to({x:2165.2},34,cjs.Ease.get(1)).to({_off:true},2).wait(1));

	// Fish1
	this.instance = new lib.Q3_Fish1();
	this.instance.setTransform(2078.85,426.65,1,1,0,0,0,5.2,15.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:590.85},34,cjs.Ease.get(1)).wait(17).to({x:-331.65},34,cjs.Ease.get(1)).to({_off:true},5).wait(1));

	// Fish2
	this.instance_1 = new lib.Q3_Fish2();
	this.instance_1.setTransform(2445.55,600.95,1,1,0,0,0,6.7,-3.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({x:957.55},34,cjs.Ease.get(1)).wait(11).to({x:-313.45},34,cjs.Ease.get(1)).to({_off:true},7).wait(1));

	// Fish3
	this.instance_2 = new lib.Q3_Fish3();
	this.instance_2.setTransform(2875.85,377.5,1,1,0,0,0,1.1,1.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:1387.85},34,cjs.Ease.get(1)).wait(15).to({x:-88.15},34,cjs.Ease.get(1)).to({_off:true},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-542.8,0,3605.1000000000004,1375.5);


(lib.question2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"NextQes":53};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}
	this.frame_98 = function() {
		this.stop();
		this.parent.fChangeQuestion();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(45).call(this.frame_98).wait(1));

	// mcOption3
	this.mcOption3 = new lib.button1();
	this.mcOption3.name = "mcOption3";
	this.mcOption3.setTransform(1556.05,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption3.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption3).wait(19).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(9).to({x:2830.25},34,cjs.Ease.get(1)).wait(10));

	// mcOption2
	this.mcOption2 = new lib.button1();
	this.mcOption2.name = "mcOption2";
	this.mcOption2.setTransform(994.75,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption2.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption2).wait(9).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(23).to({x:2480.55},34,cjs.Ease.get(1)).wait(6));

	// mcOption1
	this.mcOption1 = new lib.button1();
	this.mcOption1.name = "mcOption1";
	this.mcOption1.setTransform(433.4,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption1).wait(1).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(34).to({x:2165.2},34,cjs.Ease.get(1)).wait(3));

	// Fish1
	this.instance = new lib.Q2_Fish1();
	this.instance.setTransform(2078.85,426.65,1,1,0,0,0,5.2,15.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:1123.85},34,cjs.Ease.get(1)).wait(18).to({x:-126.65},34,cjs.Ease.get(1)).wait(5));

	// Fish4
	this.instance_1 = new lib.Q2_Fish2();
	this.instance_1.setTransform(2296.7,546.25,1,1,0,0,0,3.5,-1.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:808.7},34,cjs.Ease.get(1)).wait(18).to({x:-441.8},34,cjs.Ease.get(1)).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-567.3,320.9,3629.6000000000004,1054.6);


(lib.question1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"NextQes":53};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}
	this.frame_98 = function() {
		this.stop();
		this.parent.fChangeQuestion();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(45).call(this.frame_98).wait(1));

	// mcOption3
	this.mcOption3 = new lib.button1();
	this.mcOption3.name = "mcOption3";
	this.mcOption3.setTransform(1556.05,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption3.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption3).wait(19).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(9).to({x:2830.25},34,cjs.Ease.get(1)).wait(10));

	// mcOption2
	this.mcOption2 = new lib.button1();
	this.mcOption2.name = "mcOption2";
	this.mcOption2.setTransform(994.75,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption2.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption2).wait(9).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(23).to({x:2480.55},34,cjs.Ease.get(1)).wait(6));

	// mcOption1
	this.mcOption1 = new lib.button1();
	this.mcOption1.name = "mcOption1";
	this.mcOption1.setTransform(433.4,973.7,1,1,0,0,0,-2,29.7);
	this.mcOption1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.mcOption1).wait(1).to({y:1269.15,alpha:1},0).to({y:984.1},27,cjs.Ease.get(1)).wait(34).to({x:2165.2},34,cjs.Ease.get(1)).wait(3));

	// Fish1
	this.instance = new lib.Turttle();
	this.instance.setTransform(2430.9,502.7,1,1,0,0,0,5.2,15.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({x:942.9},34,cjs.Ease.get(1)).wait(19).to({x:-307.6},34,cjs.Ease.get(1)).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-558.8,223.9,3621.1000000000004,1151.6);


// stage content:
(lib.ui = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.fGenerateCreateJSText = function(mc, strText, xx, yy, nLineHeight, nLineWidth, strFont, strColor, strAlign)
		{	
			var tt = new createjs.Text();
			tt.shadow = new createjs.Shadow("#000000", 2, 2, 3);
			tt.text = strText;
			tt.font = strFont;
			tt.color = strColor;
			tt.textAlign = strAlign;
			tt.mouseEnabled = false;
			tt.x = xx;
			tt.y = yy;
			tt.y = -(tt.getMeasuredHeight()/3);
			tt.lineHeight = nLineHeight;
			tt.lineWidth = nLineWidth;
			mc.tt = tt;
			mc.addChild(tt);
			mc.strText = strText;
			mc.nW += tt.getMeasuredWidth();
			return tt;
		}
		
		//this.mcCurrentScreen.mcRubric.tt = this.fGenerateCreateJSText(this.mcCurrentScreen.mcRubric, this.currentRubricTxt, 0, 0, 0,  "25px Poppins", "#000", "center");
		
		this.audio = new Audio();
		this.playAudio = function (name)
		{
			this.name = name;	
			this.audio.src = "sounds/" + name + ".mp3";
			this.audio.play();	
		}
		
		this.onCompleteAudio = function(strName)
		{
			this.audio.addEventListener("ended", this.var1 = this[strName].bind(this));	
		}
		this.fRemoveChiled = function(name)
		{
			this.removeChild(name);
		}
		this.randomInteger = function (min, max) {
		  return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
		this.fGetRandomNum = function()
		{
			this.leftNum = this.randomInteger(1, 9)
			var rNum =  this.maxNum - this.leftNum;
			this.rightNum = this.randomInteger(1, rNum);
			this.fOptionNum();
			console.log(this.leftNum + "  ---  " + this.rightNum);
		
		}
		
		this.shuffleItems = function (arr) 
		{
			//return arr.sort(function() {return .5 - Math.random()});
			var newMcOrder = [];
			var end = false;
			while (!end) 
			{
				var myRandom = Math.floor(Math.random()*arr.length);
				var _selected = arr[myRandom];
				arr.splice(myRandom,1);
				newMcOrder.push(_selected);
				if (arr.length == 0) 
				{
					end = true;
				}
			}
			//this.arrSuffleArray = newMcOrder;
			return newMcOrder;
		}
		this.fOptionNum = function()
		{
			var lan = this.numArray.length;
			sum = this.leftNum  + this.rightNum;
			rndArr = [];
			console.log(" sum " + sum);
			for(var i = 1; i <= lan;  i++)
			{
				if(sum != this.numArray[i-1])
				{
					rndArr.push(i);
				}
			}
			rndArr = this.shuffleItems(rndArr);
			this.newNumArr = [sum, rndArr[0], rndArr[1]]
			this.newNumArr = this.shuffleItems(this.newNumArr);
			console.log(rndArr + "  -newNumArr-  " + this.newNumArr);
		}
		this.stop();
		this.QuesArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 
		this.currentQuestion = 1;
		var correctAns;
		stage.enableMouseOver();
		this.initFunction = function () {
			this.newQuesArr = this.shuffleItems(this.QuesArray);
			this.mcStart = new lib.start_screen();
			this.mcStart.btn.addEventListener('mousedown', this.fPlayInitScreen.bind(this));
			this.addChild(this.mcStart);
			this.mcStart.btn.cursor = 'pointer';
			var insText = this.mcRubric.mcRubricAnim.mcTT;
			insText.tt = this.fGenerateCreateJSText(insText, ins_txt, 0, 0, 60, 900,  "60px Roboto", "#FFF", "center");
		}
		this.fPlayInitScreen = function () {
			this.mcStart.play();
		}
		this.fStartGamneAnim = function () {
			this.removeChild(this.mcStart);
			this.mcRubric.play();
			this.playAudio("instruction");	
			this.onCompleteAudio("fAddListener");
			this.fLoadGameScreen();
		}
		this.fLoadGameScreen = function () {
			this.currentQnum = this.newQuesArr[this.currentQuestion-1];
			console.log("currentQnum --  "  + this.currentQnum);
			this.QuestionScreen = new lib["question" + this.currentQnum];
			this.addChild(this.QuestionScreen);
			this.QuestionScreen.scaleX = 0.67;
			this.QuestionScreen.scaleY = 0.67;
			this.fPrintOptionText();
			if(this.currentQuestion > 1){		
				this.fAddListener();
			}
		}
		this.fAddListener = function(){
			console.log("fAddListener -- ");
			for(var i = 1; this.QuestionScreen["mcOption" + i] != undefined; i++)
			{
		
			this.Options = this.QuestionScreen["mcOption" + i].btn;
			this.Options.addEventListener("mousedown",this.Options.mseDwnEvnt = this.fPressOptions.bind(this));
			this.Options.cursor = "pointer"
			this.Options.id = i;
			}
		}
		this.fPressOptions = function(e){
			correctAns = arrQText[this.newQuesArr[this.currentQuestion-1]-1].answer;
			console.log("this.newQuesArr ---  " + this.newQuesArr + "correctAns -- " + correctAns);
			this.mcCurrentOption = e.currentTarget;
			this.mcCurrentOption.parent.gotoAndStop(1);
			console.log(e.currentTarget.id + "  --this.QuestionScreen.id-- " + correctAns)
			if(this.mcCurrentOption.id == correctAns)
			{
				//this.fPrintAnswerTxt();
				this.currentQuestion++;
				this.playAudio("right");
				this.removeButtonEvent();
				setTimeout(function () {
				this.fRemoveCurrentQue();
				//this.fstartActivity();
				}.bind(this), 2500);
				//this.onCompleteAudio("fRemoveCurrentQue");
				
			}
			else
			{
				this.playAudio("wrong");
				//this.onCompleteAudio("fRefreshFunction");
				this.QuestionScreen.mouseEnabled = false;
				setTimeout(function () {
					this.fRefreshFunction();
				//this.fstartActivity();
				}.bind(this), 1000);
			}
		}
		this.fRefreshFunction = function()
		{
			this.QuestionScreen.mouseEnabled = true;
			this.mcCurrentOption.parent.gotoAndStop(0);
			this.audio.removeEventListener("ended", this.var1, false);
		}
		this.fRemoveCurrentQue = function()
		{
			if(this.currentQuestion <= maxQue)
			{
				this.QuestionScreen.gotoAndPlay("NextQes");
			}else{
				this.showEndScreen();
			}
			
			this.audio.removeEventListener("ended", this.var1, false);
		}
		this.fChangeQuestion = function()
		{
			this.removeChild(this.QuestionScreen);
			console.log(this.currentQuestion  + "  currentQuestion---  maxNum = " + maxQue);
			this.fLoadGameScreen();
		}
		this.showEndScreen = function()
		{
			//createjs.Tween.get(this.mcGameScreen, {loop: false}).to({alpha: 0}, 1000, createjs.Ease.getPowInOut(4));
			this.playAudio("welldone");
			this.endScreen = new lib.end_screen();
			this.addChild(this.endScreen);
			this.endScreen.scaleX = 0.67;
			this.endScreen.scaleY = 0.67;
			//this.fReplay();
		}
		this.removeButtonEvent = function()
		{
			for(var i = 1; this.QuestionScreen["mcOption" + i] != undefined; i++)
			{
				this.Options = this.QuestionScreen["mcOption" + i].btn;
				this.Options.removeEventListener("mousedown", this.Options.mseDwnEvnt);
				this.Options.cursor = null;
			}
			
		}
		this.fPrintOptionText = function(){
			console.log("this.currentQnum  -- " + this.currentQnum);
			for (var i = 1; this.QuestionScreen["mcOption" + i] != undefined; i++)
			{
				var currentOption = this.QuestionScreen["mcOption" + i].mcTT;
				currentOption.tt = this.fGenerateCreateJSText(currentOption, arrQText[this.currentQnum-1]["option" + i], 0, 0, 0, 0,  "150px Roboto", "#FFF", "center");
			}
		}
		this.initFunction();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Rubric
	this.mcRubric = new lib.mcRubric();
	this.mcRubric.name = "mcRubric";
	this.mcRubric.setTransform(640,-18.5,0.6667,0.6667,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.mcRubric).wait(1));

	// BG
	this.instance = new lib.Bitmap22();
	this.instance.setTransform(0,0,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,640,360);
// library properties:
lib.properties = {
	id: '43D59298A37CE247BFAC71FF180991A9',
	width: 1280,
	height: 720,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_169.png?1728898240418", id:"CachedBmp_169"},
		{src:"images/ui_atlas_1.png?1728898240362", id:"ui_atlas_1"},
		{src:"images/ui_atlas_2.png?1728898240362", id:"ui_atlas_2"},
		{src:"images/ui_atlas_3.png?1728898240363", id:"ui_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['43D59298A37CE247BFAC71FF180991A9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;