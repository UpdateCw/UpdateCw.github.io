/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xxlarge: '(max-width: 1920px)',
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 1000px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$all = $body.add($header);

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 0);
			});

		// Touch mode.
			skel.on('change', function() {

				if (skel.vars.mobile || skel.breakpoint('small').active)
					$body.addClass('is-touch');
				else
					$body.removeClass('is-touch');

			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Fix: IE flexbox fix.
			if (skel.vars.IEVersion <= 11 && skel.vars.ieversion>= 10) {

				var $main = $('.main.fullscreen'),
					IEResizeTimeout;

				$window
					.on('resize.ie-flexbox-fix', function() {

						clearTimeout(IEResizeTimeout);

						IEResizeTimeout = setTimeout(function() {

							var wh = $window.height();

							$main.each(function() {

								var $this = $(this);

								$this.css('height', '');

								if ($this.height() </=>