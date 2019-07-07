import {variables as $v} from '../modules/variables';

export function preloader() {
	$v.$window.on('load', function () {
		let preloader = $('.preloader');
		let preloaderItem = preloader.find('.preloader-item');
		preloaderItem.fadeOut();
		preloader.delay(350).fadeOut('slow');
		setTimeout(function () {
			$v.$body.removeClass('overflow');
		}, 450);
	});
}

export function typicalTableWrap() {
	let typicalTableWrap = '<div class="typical-table-wrap"></div>';

	$('.typical-styles').find('table').wrap(typicalTableWrap);
}

export function globalWrapper() {
	setTimeout(function () {
		let globalWrapper = $('.global-wrapper');

		if (globalWrapper.height() > $v.$window.height()) {
			globalWrapper.css({
				'overflow': 'visible',
				'height': 'auto'
			});
		} else {
			globalWrapper.css({
				'overflow': 'hidden',
				'height': '100%'
			});
		}
	}, 50);
}

export function scrollAnimate(speed) {
	let anchor = $('.anchor');

	anchor.on("click", handler);

	function handler(event) {
		let hash = event.target.hash;

		if (hash) {
			let tag = $(hash);
			if ($(hash).length) {
				let offset = tag.offset().top;
				$('html, body').stop().animate({scrollTop: offset}, speed);
			}
		}
	}
}

export function scrollAnimateUnderPage(speed, timeout) {
	let myHash = location.hash;

	if (myHash[1] !== undefined) {
		setTimeout(function () {
			$('html, body').animate({scrollTop: $(myHash).offset().top}, speed);
		}, timeout);
	}

	location.hash = '';
}

export function copyingText() {
	(function ($) {

		/* Функция для копирования текста из одного элемента в другой*/
		$.fn.copyingText = function (where) {
			let copyElem = $(this).clone();
			let copyText = $(copyElem).text();
			$(where).text(copyText);
		};

	})(jQuery);
}

export function objectFitFromIe() {
	(function ($) {
		$.fn.imageResponsive = function () {
			let imgCover = $('.img-cover');


			imgCover.css({
				'width': 'auto',
				'height': 'auto',
				'left': '50%',
				'top': '50%'
			});

			imgCover.each(function () {

				elemHeight(this);
				elemWidth(this);
				parentSize(this);
				elemHeightWidth(this);
				smallImage(this);
				elemCenter(this);

			});

			function elemHeight(el) {
				let h = $(el).height(),
					w = $(el).width();
				if (h < w) {
					$(el).css('height', '100%');
				}
			}

			function elemWidth(el) {
				let h = $(el).height(),
					w = $(el).width();

				if (h > w) {
					$(el).css('width', '100%');
				}
			}

			function elemHeightWidth(el) {
				let h = $(el).height(),
					w = $(el).width();

				if (w === h) {
					parentSize(el);
				}
			}

			function smallImage(el) {
				let ph = $(el).parent().height(),
					pw = $(el).parent().width(),
					h = $(el).height(),
					w = $(el).width();

				if (w === h && w < pw && h < ph || w !== h && w < pw && h < ph) {
					ph < pw ?
						$(el).css({
							'width': '100%',
							'height': 'auto'
						}) :
						$(el).css({
							'height': '100%',
							'width': 'auto'
						});
				}
				if (w === h && ph === pw) {
					$(el).css({
						'width': '100%',
						'height': '100%'
					});
				}
			}

			function parentSize(el) {
				let ph = $(el).parent().height(),
					pw = $(el).parent().width(),
					h = $(el).height(),
					w = $(el).width();

				if (h < ph) {
					$(el).css({
						'height': '100%',
						'width': 'auto'
					})
				}
				if (w < pw) {
					$(el).css({
						'width': '100%',
						'height': 'auto'
					})
				}
			}

			function elemCenter(el) {
				let h = $(el).height(),
					w = $(el).width();

				$(el).css({
					'margin-left': '-' + w / 100 * 50 + 'px',
					'margin-top': '-' + h / 100 * 50 + 'px'
				});
			}
		};
	}(jQuery));

	function objectFitIe() {
		let isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);

		if (isIE11) {
			let imageCover = $('.img-cover');

			imageCover.imageResponsive();

			$v.$window.on('resize', function () {
				let winWidth = $v.$window.width();

				if (winWidth >= 1200 || winWidth >= 992 || winWidth >= 768 || winWidth >= 576 || winWidth > 375) {
					setTimeout(function () {
						imageCover.imageResponsive();
					}, 10);
				}
			});
		}
	}

	objectFitIe();
}

export function sameHeight() {
	(function ($) {

		/* Выравнивание длины элементов*/
		$.fn.sameHeight = function () {
			let currentHeight;
			let talLestElem = 0;

			this.css('height', '');
			this.each(function () {
				currentHeight = $(this).height();
				if (currentHeight > talLestElem) {
					talLestElem = currentHeight;
				}
			});
			this.height(talLestElem);
		};

	})(jQuery);
}

export function scrollActiveMenu() {

	let headerLink = $('.header nav li');

	headerLink.each(function () {
		let selector = $(this).children().attr('href');
		let windowTop = $(window).scrollTop();
		let sectionTop = $(selector).offset().top;
		if (windowTop > sectionTop - 100) {
			headerLink.removeClass('selected').filter(this).addClass('selected');
		}
	});
}

export function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

export function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getBooleanAttr(attr) {
	return attr === 'true';
}

export function createSvg(tag, attrs) {
	let el = document.createElementNS('http://www.w3.org/2000/svg', tag);
	for (let k in attrs) el.setAttribute(k, attrs[k]);
	return el;
}

export function getBottomOffset(elem) {
	return $v.$window.outerHeight() - (elem.outerHeight() + elem.offset().top)
}

export function getRightOffset(elem) {
	return $v.$window.outerWidth() - (elem.outerWidth() + elem.offset().left)
}

export function ifExist(elem, f) {
	if (elem.length > 0) {
		f()
	}
}

export function getGreatestHeight(element) {
	let h = 0;

	$.each(element, function (index, element) {

		let el = $(element);

		if (el.outerHeight() > h) {
			h = el.outerHeight()
		}

	});

	let hReal = h;
	h = 0;

	return hReal;
}
