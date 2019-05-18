	// jQuery Selections
	var $html = $('html'),
			$container = $('#container-parallax'),
			$scene = $('#scene');

	// Hide browser menu.
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

	// Setup FastClick.
	FastClick.attach(document.body);

	// Add touch functionality.
	if (Hammer.HAS_TOUCHEVENTS) {
		$container.hammer({drag_lock_to_axis: true});
		_.tap($html, 'a,button,[data-tap]');
	}

	// Resize handler.
	(resize = function() {
		$scene[0].style.width = window.innerWidth + 'px';
		$scene[0].style.height = window.innerHeight + 'px';
	})();

	// Attach window listeners.
	window.onresize = _.debounce(resize, 200);
	window.onscroll = _.debounce(resize, 200);

	// Pretty simple huh?
	$scene.parallax();