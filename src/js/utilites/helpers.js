import {variables as $v} from '../modules/variables';

export function preloader(delay, timeout) {
	$v.$window.on('load', function () {
		let preloader = $('.preloader');
		let preloaderItem = preloader.find('.preloader-item');
		preloaderItem.fadeOut();
		preloader.delay(delay).fadeOut('slow');
		setTimeout(function () {
			$v.$body.removeClass('overflow');
		}, timeout);
	});
}

export function typicalTableWrap() {
	let typicalTableWrap = '<div class="typical-table-wrap"></div>';

	$('.typical-styles').find('table').wrap(typicalTableWrap);
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

export function scrollActiveMenu() {

	let headerLink = $v.header.find('nav li');

	headerLink.each(function () {
		let selector = $(this).children().attr('href');
		let windowTop = $(window).scrollTop();
		let sectionTop = $(selector).offset().top;
		if (windowTop > sectionTop - 100) {
			headerLink.removeClass('selected').filter(this).addClass('selected');
		}
	});
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
