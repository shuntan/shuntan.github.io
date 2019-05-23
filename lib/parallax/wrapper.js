	// jQuery Selections
	//var $html = $('html'),
	//		$container = $('#container-parallax'),
	//		$scene = $('#scene');

	// Setup FastClick.
	//FastClick.attach(document.body);

	// Resize handler.
	//(resize = function() {
	//	$scene[0].style.width = window.innerWidth + 'px';
	//	$scene[0].style.height = window.innerHeight + 'px';
	//})();

	// Attach window listeners.
	//window.onresize = _.debounce(resize, 200);
	//window.onscroll = _.debounce(resize, 200);

	// Pretty simple huh?
	//$scene.parallax();
	var scene = document.getElementById('scene'); 
	var parallaxInstance = new Parallax(scene, {relativeInput: true});